import * as CoreSchemas from './coreSchemas.js'

type InferLazySchema<_T> = any

export type ApiKeySource = InferLazySchema<typeof CoreSchemas.ApiKeySourceSchema>
export type AsyncHookJSONOutput = InferLazySchema<
  typeof CoreSchemas.AsyncHookJSONOutputSchema
>
export type ConfigChangeHookInput = InferLazySchema<
  typeof CoreSchemas.ConfigChangeHookInputSchema
>
export type CwdChangedHookInput = InferLazySchema<
  typeof CoreSchemas.CwdChangedHookInputSchema
>
export type ElicitationHookInput = InferLazySchema<
  typeof CoreSchemas.ElicitationHookInputSchema
>
export type ElicitationResultHookInput = InferLazySchema<
  typeof CoreSchemas.ElicitationResultHookInputSchema
>
export type ExitReason = InferLazySchema<typeof CoreSchemas.ExitReasonSchema>
export type FastModeState = InferLazySchema<
  typeof CoreSchemas.FastModeStateSchema
>
export type FileChangedHookInput = InferLazySchema<
  typeof CoreSchemas.FileChangedHookInputSchema
>
export type HookEvent = InferLazySchema<typeof CoreSchemas.HookEventSchema>
export type HookInput = InferLazySchema<typeof CoreSchemas.HookInputSchema>
export type HookJSONOutput = InferLazySchema<
  typeof CoreSchemas.HookJSONOutputSchema
>
export type InstructionsLoadedHookInput = InferLazySchema<
  typeof CoreSchemas.InstructionsLoadedHookInputSchema
>
export type McpServerConfigForProcessTransport = InferLazySchema<
  typeof CoreSchemas.McpServerConfigForProcessTransportSchema
>
export type McpServerStatus = InferLazySchema<
  typeof CoreSchemas.McpServerStatusSchema
>
export type ModelInfo = InferLazySchema<typeof CoreSchemas.ModelInfoSchema>
export type ModelUsage = InferLazySchema<typeof CoreSchemas.ModelUsageSchema>
export type NotificationHookInput = InferLazySchema<
  typeof CoreSchemas.NotificationHookInputSchema
>
export type PermissionDeniedHookInput = InferLazySchema<
  typeof CoreSchemas.PermissionDeniedHookInputSchema
>
export type PermissionMode = InferLazySchema<
  typeof CoreSchemas.PermissionModeSchema
>
export type PermissionRequestHookInput = InferLazySchema<
  typeof CoreSchemas.PermissionRequestHookInputSchema
>
export type PermissionResult = InferLazySchema<
  typeof CoreSchemas.PermissionResultSchema
>
export type PermissionUpdate = InferLazySchema<
  typeof CoreSchemas.PermissionUpdateSchema
>
export type PostCompactHookInput = InferLazySchema<
  typeof CoreSchemas.PostCompactHookInputSchema
>
export type PostToolUseFailureHookInput = InferLazySchema<
  typeof CoreSchemas.PostToolUseFailureHookInputSchema
>
export type PostToolUseHookInput = InferLazySchema<
  typeof CoreSchemas.PostToolUseHookInputSchema
>
export type PreCompactHookInput = InferLazySchema<
  typeof CoreSchemas.PreCompactHookInputSchema
>
export type PreToolUseHookInput = InferLazySchema<
  typeof CoreSchemas.PreToolUseHookInputSchema
>
export type RewindFilesResult = InferLazySchema<
  typeof CoreSchemas.RewindFilesResultSchema
>
export type SDKAssistantMessage = InferLazySchema<
  typeof CoreSchemas.SDKAssistantMessageSchema
>
export type SDKAssistantMessageError = InferLazySchema<
  typeof CoreSchemas.SDKAssistantMessageErrorSchema
>
export type SDKCompactBoundaryMessage = InferLazySchema<
  typeof CoreSchemas.SDKCompactBoundaryMessageSchema
>
export type SDKMessage = InferLazySchema<typeof CoreSchemas.SDKMessageSchema>
export type SDKPartialAssistantMessage = InferLazySchema<
  typeof CoreSchemas.SDKPartialAssistantMessageSchema
>
export type SDKPermissionDenial = InferLazySchema<
  typeof CoreSchemas.SDKPermissionDenialSchema
>
export type SDKRateLimitInfo = InferLazySchema<
  typeof CoreSchemas.SDKRateLimitInfoSchema
>
export type SDKResultMessage = InferLazySchema<
  typeof CoreSchemas.SDKResultMessageSchema
>
export type SDKResultSuccess = InferLazySchema<
  typeof CoreSchemas.SDKResultSuccessSchema
>
export type SDKSessionInfo = InferLazySchema<
  typeof CoreSchemas.SDKSessionInfoSchema
>
export type SDKStatus = InferLazySchema<typeof CoreSchemas.SDKStatusSchema>
export type SDKStatusMessage = InferLazySchema<
  typeof CoreSchemas.SDKStatusMessageSchema
>
export type SDKSystemMessage = InferLazySchema<
  typeof CoreSchemas.SDKSystemMessageSchema
>
export type SDKToolProgressMessage = InferLazySchema<
  typeof CoreSchemas.SDKToolProgressMessageSchema
>
export type SDKUserMessage = InferLazySchema<
  typeof CoreSchemas.SDKUserMessageSchema
>
export type SDKUserMessageReplay = InferLazySchema<
  typeof CoreSchemas.SDKUserMessageReplaySchema
>
export type SessionEndHookInput = InferLazySchema<
  typeof CoreSchemas.SessionEndHookInputSchema
>
export type SessionStartHookInput = InferLazySchema<
  typeof CoreSchemas.SessionStartHookInputSchema
>
export type SetupHookInput = InferLazySchema<
  typeof CoreSchemas.SetupHookInputSchema
>
export type StopFailureHookInput = InferLazySchema<
  typeof CoreSchemas.StopFailureHookInputSchema
>
export type StopHookInput = InferLazySchema<
  typeof CoreSchemas.StopHookInputSchema
>
export type SubagentStartHookInput = InferLazySchema<
  typeof CoreSchemas.SubagentStartHookInputSchema
>
export type SubagentStopHookInput = InferLazySchema<
  typeof CoreSchemas.SubagentStopHookInputSchema
>
export type SyncHookJSONOutput = InferLazySchema<
  typeof CoreSchemas.SyncHookJSONOutputSchema
>
export type TaskCompletedHookInput = InferLazySchema<
  typeof CoreSchemas.TaskCompletedHookInputSchema
>
export type TaskCreatedHookInput = InferLazySchema<
  typeof CoreSchemas.TaskCreatedHookInputSchema
>
export type TeammateIdleHookInput = InferLazySchema<
  typeof CoreSchemas.TeammateIdleHookInputSchema
>
export type UserPromptSubmitHookInput = InferLazySchema<
  typeof CoreSchemas.UserPromptSubmitHookInputSchema
>
