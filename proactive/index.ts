let active = false
let paused = false
let contextBlocked = false
let nextTickAt: number | null = null

const listeners = new Set<() => void>()

function emit(): void {
  for (const listener of listeners) {
    listener()
  }
}

export function activateProactive(_source?: string): void {
  active = true
  paused = false
  nextTickAt = Date.now() + 60_000
  emit()
}

export function deactivateProactive(): void {
  active = false
  paused = false
  nextTickAt = null
  emit()
}

export function getNextTickAt(): number | null {
  return nextTickAt
}

export function isProactiveActive(): boolean {
  return active && !contextBlocked
}

export function isProactivePaused(): boolean {
  return paused
}

export function pauseProactive(): void {
  paused = true
  emit()
}

export function resumeProactive(): void {
  paused = false
  emit()
}

export function setContextBlocked(blocked: boolean): void {
  contextBlocked = blocked
  emit()
}

export function subscribeToProactiveChanges(listener: () => void): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}
