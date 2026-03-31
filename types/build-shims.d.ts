declare module 'bun:bundle' {
  export function feature(name: string): boolean
}

declare const MACRO: {
  VERSION: string
  BUILD_TIME?: string
  PACKAGE_URL?: string
  NATIVE_PACKAGE_URL?: string
  VERSION_CHANGELOG?: string
  ISSUES_EXPLAINER?: string
  FEEDBACK_CHANNEL?: string
  [key: string]: unknown
}

declare namespace Bun {
  const embeddedFiles: unknown[]
  const WebView: unknown
  const YAML: { parse(input: string): unknown }
  const JSONL: unknown
  const semver: {
    order(a: string, b: string): number
    satisfies(version: string, range: string): boolean
  }
  function listen<T = unknown>(options: unknown): unknown
  function spawn(args: unknown, options?: unknown): unknown
  function hash(value: unknown, seed?: unknown): number | bigint
  function which(command: string): string | null
  function gc(force?: boolean): void
  function stringWidth(input: string): number
  function wrapAnsi(
    input: string,
    width: number,
    options?: unknown,
  ): string
  function generateHeapSnapshot(...args: unknown[]): ArrayBuffer
}

declare const Bun: typeof Bun

declare module 'react/compiler-runtime' {
  export const c: (...args: unknown[]) => unknown
}

declare module '@ant/claude-for-chrome-mcp' {
  export const BROWSER_TOOLS: unknown
  export type ClaudeForChromeContext = unknown
  export type Logger = unknown
  export type PermissionMode = unknown
  export const createClaudeForChromeMcpServer: unknown
}

declare module '@ant/computer-use-input' {
  export type ComputerUseInput = unknown
  export type ComputerUseInputAPI = unknown
}

declare module '@ant/computer-use-mcp' {
  export type ComputerExecutor = unknown
  export type DisplayGeometry = unknown
  export type FrontmostApp = unknown
  export type InstalledApp = unknown
  export type ResolvePrepareCaptureResult = unknown
  export type RunningApp = unknown
  export type ScreenshotResult = unknown
  export type ComputerUseSessionContext = unknown
  export type CuCallToolResult = unknown
  export type ScreenshotDims = unknown
  export const API_RESIZE_PARAMS: unknown
  export const targetImageSize: unknown
  export const buildComputerUseTools: unknown
  export const createComputerUseMcpServer: unknown
  export const bindSessionContext: unknown
}

declare module '@ant/computer-use-mcp/sentinelApps' {
  export const getSentinelCategory: unknown
}

declare module '@ant/computer-use-mcp/types' {
  export type CoordinateMode = unknown
  export type CuSubGates = unknown
  export type ComputerUseHostAdapter = unknown
  export type Logger = unknown
  export type CuPermissionRequest = unknown
  export type CuPermissionResponse = unknown
  export const DEFAULT_GRANT_FLAGS: unknown
}

declare module '@ant/computer-use-swift' {
  export type ComputerUseAPI = unknown
}

declare module '@anthropic-ai/mcpb' {
  export type McpbManifest = unknown
  export type McpbUserConfigurationOption = unknown
  export const McpbManifestSchema: unknown
  export const getMcpConfigForManifest: unknown
}

declare module '@anthropic-ai/sandbox-runtime' {
  export type FsReadRestrictionConfig = any
  export type FsWriteRestrictionConfig = any
  export type IgnoreViolationsConfig = any
  export type NetworkHostPattern = any
  export type NetworkRestrictionConfig = any
  export type SandboxAskCallback = any
  export type SandboxDependencyCheck = any
  export type SandboxRuntimeConfig = any
  export type SandboxViolationEvent = any
  export const SandboxManager: any
  export const SandboxRuntimeConfigSchema: any
  export const SandboxViolationStore: any
}

declare module 'color-diff-napi' {
  export type SyntaxTheme = unknown
  export const ColorDiff: unknown
  export const ColorFile: unknown
  export function getSyntaxTheme(themeName: string): unknown
}
