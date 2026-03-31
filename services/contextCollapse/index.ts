type CollapseStats = {
  collapsedSpans: number
  collapsedMessages: number
  stagedSpans: number
  health: {
    totalErrors: number
    totalEmptySpawns: number
    totalSpawns: number
    emptySpawnWarningEmitted: boolean
    lastError?: string
  }
}

const stats: CollapseStats = {
  collapsedSpans: 0,
  collapsedMessages: 0,
  stagedSpans: 0,
  health: {
    totalErrors: 0,
    totalEmptySpawns: 0,
    totalSpawns: 0,
    emptySpawnWarningEmitted: false,
  },
}

const listeners = new Set<() => void>()

function emit(): void {
  for (const listener of listeners) {
    listener()
  }
}

export async function applyCollapsesIfNeeded(messages: unknown[]): Promise<{
  messages: unknown[]
}> {
  return { messages }
}

export function getStats(): CollapseStats {
  return stats
}

export function initContextCollapse(): void {}

export function isContextCollapseEnabled(): boolean {
  return false
}

export function isWithheldPromptTooLong(_messages: unknown[]): boolean {
  return false
}

export function recoverFromOverflow(messages: unknown[]): unknown[] {
  return messages
}

export function resetContextCollapse(): void {
  stats.collapsedSpans = 0
  stats.collapsedMessages = 0
  stats.stagedSpans = 0
  stats.health.totalErrors = 0
  stats.health.totalEmptySpawns = 0
  stats.health.totalSpawns = 0
  stats.health.emptySpawnWarningEmitted = false
  delete stats.health.lastError
  emit()
}

export function subscribe(listener: () => void): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}
