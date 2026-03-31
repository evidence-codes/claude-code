import { createRequire } from 'module'

type BrowserTool = {
  name: string
}

let cachedBrowserTools: BrowserTool[] | undefined

const require = createRequire(import.meta.url)

export function getClaudeInChromeBrowserTools(): BrowserTool[] {
  if (cachedBrowserTools !== undefined) {
    return cachedBrowserTools
  }

  try {
    const mod = require('@ant/claude-for-chrome-mcp') as {
      BROWSER_TOOLS?: BrowserTool[]
    }
    cachedBrowserTools = Array.isArray(mod.BROWSER_TOOLS)
      ? mod.BROWSER_TOOLS
      : []
  } catch {
    cachedBrowserTools = []
  }

  return cachedBrowserTools
}
