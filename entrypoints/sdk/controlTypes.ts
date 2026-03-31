import * as ControlSchemas from './controlSchemas.js'

type InferLazySchema<_T> = any

export type SDKControlCancelRequest = InferLazySchema<
  typeof ControlSchemas.SDKControlCancelRequestSchema
>
export type SDKControlInitializeRequest = InferLazySchema<
  typeof ControlSchemas.SDKControlInitializeRequestSchema
>
export type SDKControlInitializeResponse = InferLazySchema<
  typeof ControlSchemas.SDKControlInitializeResponseSchema
>
export type SDKControlMcpSetServersResponse = InferLazySchema<
  typeof ControlSchemas.SDKControlMcpSetServersResponseSchema
>
export type SDKControlPermissionRequest = InferLazySchema<
  typeof ControlSchemas.SDKControlPermissionRequestSchema
>
export type SDKControlReloadPluginsResponse = InferLazySchema<
  typeof ControlSchemas.SDKControlReloadPluginsResponseSchema
>
export type SDKControlRequest = InferLazySchema<
  typeof ControlSchemas.SDKControlRequestSchema
>
export type SDKControlRequestInner = InferLazySchema<
  typeof ControlSchemas.SDKControlRequestInnerSchema
>
export type SDKControlResponse = InferLazySchema<
  typeof ControlSchemas.SDKControlResponseSchema
>
export type SDKPartialAssistantMessage = unknown
export type StdinMessage = InferLazySchema<typeof ControlSchemas.StdinMessageSchema>
export type StdoutMessage = InferLazySchema<
  typeof ControlSchemas.StdoutMessageSchema
>
