let assistantForced = false

export function getAssistantSystemPromptAddendum(): string {
  return ''
}

export async function initializeAssistantTeam(): Promise<undefined> {
  return undefined
}

export function isAssistantForced(): boolean {
  return assistantForced
}

export function isAssistantMode(): boolean {
  return assistantForced
}

export function markAssistantForced(): void {
  assistantForced = true
}
