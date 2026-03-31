# Claude Reconstructed

This repository is a reconstructed local snapshot of the Claude Code CLI/TUI.

It is not the original upstream build environment. The project has been adapted so it can be built and used locally from this folder.

## English

### What this is

- A reconstructed TypeScript/Bun-based Claude Code CLI.
- The current local build produces a working `dist` folder.
- This snapshot is intended for local experimentation, debugging, and recovery work.

### Requirements

- Node.js 18 or newer
- Bun 1.x
- npm

### Install dependencies

```powershell
npm install
```

### Build

```powershell
npm run build
```

This generates the compiled output in `dist/`.

### Run the CLI

Interactive mode:

```powershell
bun dist/entrypoints/cli.js
```

Help:

```powershell
bun dist/entrypoints/cli.js --help
```

Diagnostics:

```powershell
bun dist/entrypoints/cli.js doctor
```

Version:

```powershell
bun dist/entrypoints/cli.js --version
```

### Non-interactive mode

Print mode with a prompt argument:

```powershell
bun dist/entrypoints/cli.js -p "Explain this project"
```

Print mode with stdin:

```powershell
"Explain this project" | bun dist/entrypoints/cli.js -p
```

### Useful commands

- `bun dist/entrypoints/cli.js --help`
- `bun dist/entrypoints/cli.js doctor`
- `bun dist/entrypoints/cli.js auth`
- `bun dist/entrypoints/cli.js mcp`
- `bun dist/entrypoints/cli.js plugin`
- `bun dist/entrypoints/cli.js agents`

### Debugging

Write debug logs to a file:

```powershell
bun dist/entrypoints/cli.js --debug-file .\claude-debug.log
```

Read the last lines:

```powershell
Get-Content .\claude-debug.log -Tail 200
```

### Known limitations

- This is a reconstructed build, not the original packaged release.
- The version may appear as `0.0.0+reconstructed`.
- Auto-update behavior should not be treated as reliable in this snapshot.
- `npm run build` is the supported local build path.
- `npm run typecheck` may still fail because the snapshot is incomplete compared to the original source tree.

## Portugues

### O que e isso

- Um snapshot reconstruido da CLI/TUI do Claude Code em TypeScript/Bun.
- O build local atual gera uma pasta `dist` utilizavel.
- Este snapshot serve para uso local, depuracao e recuperacao do projeto.

### Requisitos

- Node.js 18 ou mais recente
- Bun 1.x
- npm

### Instalar dependencias

```powershell
npm install
```

### Compilar

```powershell
npm run build
```

Isso gera a saida compilada em `dist/`.

### Rodar a CLI

Modo interativo:

```powershell
bun dist/entrypoints/cli.js
```

Ajuda:

```powershell
bun dist/entrypoints/cli.js --help
```

Diagnostico:

```powershell
bun dist/entrypoints/cli.js doctor
```

Versao:

```powershell
bun dist/entrypoints/cli.js --version
```

### Modo nao interativo

Modo `print` com prompt na linha de comando:

```powershell
bun dist/entrypoints/cli.js -p "Explique este projeto"
```

Modo `print` recebendo texto via stdin:

```powershell
"Explique este projeto" | bun dist/entrypoints/cli.js -p
```

### Comandos uteis

- `bun dist/entrypoints/cli.js --help`
- `bun dist/entrypoints/cli.js doctor`
- `bun dist/entrypoints/cli.js auth`
- `bun dist/entrypoints/cli.js mcp`
- `bun dist/entrypoints/cli.js plugin`
- `bun dist/entrypoints/cli.js agents`

### Depuracao

Gravar logs em arquivo:

```powershell
bun dist/entrypoints/cli.js --debug-file .\claude-debug.log
```

Ler as ultimas linhas:

```powershell
Get-Content .\claude-debug.log -Tail 200
```

### Limitacoes conhecidas

- Este e um build reconstruido, nao o release original empacotado.
- A versao pode aparecer como `0.0.0+reconstructed`.
- O mecanismo de auto-update nao deve ser considerado confiavel neste snapshot.
- `npm run build` e o caminho de build local suportado.
- `npm run typecheck` ainda pode falhar porque o snapshot nao esta completo em relacao a arvore original.
