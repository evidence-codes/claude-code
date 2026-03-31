import { cp, mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, extname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = resolve(rootDir, 'dist');

const assets = [
  'utils/ultraplan/prompt.txt',
  'utils/permissions/yolo-classifier-prompts/auto_mode_system_prompt.txt',
  'utils/permissions/yolo-classifier-prompts/permissions_external.txt',
  'utils/permissions/yolo-classifier-prompts/permissions_anthropic.txt',
];

for (const relativePath of assets) {
  const sourcePath = resolve(rootDir, relativePath);
  const targetPath = resolve(rootDir, 'dist', relativePath);
  await mkdir(dirname(targetPath), { recursive: true });
  await cp(sourcePath, targetPath);
}

async function* walk(dirPath) {
  for (const entry of await readdir(dirPath, { withFileTypes: true })) {
    const entryPath = resolve(dirPath, entry.name);
    if (entry.isDirectory()) {
      yield* walk(entryPath);
      continue;
    }

    yield entryPath;
  }
}

function toRelativeDistImport(fromFilePath, sourceSpecifier) {
  const targetPath = resolve(distDir, sourceSpecifier.slice('src/'.length));
  let relativePath = relative(dirname(fromFilePath), targetPath).replaceAll('\\', '/');
  if (!relativePath.startsWith('.')) {
    relativePath = `./${relativePath}`;
  }
  return relativePath;
}

function rewriteSrcImports(filePath, contents) {
  let didChange = false;
  const replaceFrom = (_match, prefix, quote, sourceSpecifier) => {
    didChange = true;
    return `${prefix}${quote}${toRelativeDistImport(filePath, sourceSpecifier)}${quote}`;
  };
  const replaceCall = (_match, prefix, quote, sourceSpecifier, suffix) => {
    didChange = true;
    return `${prefix}${quote}${toRelativeDistImport(filePath, sourceSpecifier)}${quote}${suffix}`;
  };

  const updated = contents
    .replace(/(\bfrom\s+)(['"])(src\/[^'"]+\.js)\2/g, replaceFrom)
    .replace(/(\bimport\(\s*)(['"])(src\/[^'"]+\.js)\2(\s*\))/g, replaceCall)
    .replace(/(\brequire\(\s*)(['"])(src\/[^'"]+\.js)\2(\s*\))/g, replaceCall);

  return didChange ? updated : contents;
}

for await (const filePath of walk(distDir)) {
  if (extname(filePath) !== '.js') {
    continue;
  }

  const source = await readFile(filePath, 'utf8');
  const rewritten = rewriteSrcImports(filePath, source);
  if (rewritten !== source) {
    await writeFile(filePath, rewritten, 'utf8');
  }
}
