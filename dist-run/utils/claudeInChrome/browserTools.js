import { createRequire } from 'module';
let cachedBrowserTools;
const require = createRequire(import.meta.url);
export function getClaudeInChromeBrowserTools() {
    if (cachedBrowserTools !== undefined) {
        return cachedBrowserTools;
    }
    try {
        const mod = require('@ant/claude-for-chrome-mcp');
        cachedBrowserTools = Array.isArray(mod.BROWSER_TOOLS)
            ? mod.BROWSER_TOOLS
            : [];
    }
    catch {
        cachedBrowserTools = [];
    }
    return cachedBrowserTools;
}
