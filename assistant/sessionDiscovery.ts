export type AssistantSession = {
  id?: string
  sessionId?: string
  title?: string
}

export async function discoverAssistantSessions(): Promise<AssistantSession[]> {
  return []
}
