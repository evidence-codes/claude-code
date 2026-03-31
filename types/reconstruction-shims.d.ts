declare module './types.js' {
  export type Action = any
  export type AgentWizardData = any
  export type AuthInfo = any
  export type BackendDetectionResult = any
  export type BackendType = any
  export type BillingType = any
  export type BRIDGE_LOGIN_ERROR = any
  export type BRIDGE_LOGIN_INSTRUCTION = any
  export type BridgeApiClient = any
  export type BridgeConfig = any
  export type BridgeLogger = any
  export type BridgeWorkerType = any
  export type CancelTaskResult = any
  export type ConnectedMCPServer = any
  export type MCPServerConnection = any
  export type McpHTTPServerConfig = any
  export type McpJsonConfigSchema = any
  export type McpSSEServerConfig = any
  export type McpSdkServerConfig = any
  export type ModeState = any
  export type OAuthProfileResponse = any
  export type OAuthTokenExchangeResponse = any
  export type OAuthTokens = any
  export type PaneBackend = any
  export type PaneBackendType = any
  export type PaneId = any
  export type SecureStorage = any
  export type SecureStorageData = any
  export type ServerInfo = any
  export type SessionActivity = any
  export type SessionDoneStatus = any
  export type SessionHandle = any
  export type SessionSpawnOpts = any
  export type SessionSpawner = any
  export type SettingsJson = any
  export type SpawnMode = any
  export type State = any
  export type Warning = any
  export type Workflow = any
}

declare module '../types.js' {
  export type AuthInfo = any
  export type JSONRPCMessage = any
  export type RequestId = any
  export type SecureStorage = any
  export type SecureStorageData = any
  export type SettingsJson = any
}

declare module './assistant/sessionDiscovery.js' {
  export type AssistantSession = any
}

declare module './cli/handlers/ant.js' {
  const antHandler: any
  export default antHandler
}

declare module './commands/buddy/index.js' {
  const buddyCommand: any
  export default buddyCommand
}

declare module './commands/fork/index.js' {
  const forkCommand: any
  export default forkCommand
}

declare module './commands/peers/index.js' {
  const peersCommand: any
  export default peersCommand
}

declare module './commands/workflows/index.js' {
  const workflowsCommand: any
  export default workflowsCommand
}

declare module './messages/SnipBoundaryMessage.js' {
  export function SnipBoundaryMessage(...args: unknown[]): unknown
}

declare module './tools/WorkflowTool/createWorkflowCommand.js' {
  const createWorkflowCommand: any
  export default createWorkflowCommand
}

declare module './transports/Transport.js' {
  export type Transport = import('../cli/transports/Transport.js').Transport
}

declare module './Transport.js' {
  export type Transport = import('../cli/transports/Transport.js').Transport
}

declare module './unifiedTypes.js' {
  export type UnifiedInstalledItem = any
}

declare module './UserForkBoilerplateMessage.js' {
  export function UserForkBoilerplateMessage(...args: unknown[]): unknown
}

declare module './UserGitHubWebhookMessage.js' {
  export function UserGitHubWebhookMessage(...args: unknown[]): unknown
}

declare module '../components/Spinner/types.js' {
  export type SpinnerMode = any
}

declare module '../../components/mcp/types.js' {
  export type AgentMcpServerInfo = any
}

declare module '../keybindings/types.js' {
  export type KeybindingAction = any
  export type KeybindingContextName = any
  export type ParsedKeystroke = any
}

declare module 'audio-capture-napi' {
  const audioCapture: any
  export default audioCapture
}

declare module 'image-processor-napi' {
  const imageProcessor: any
  export default imageProcessor
}
