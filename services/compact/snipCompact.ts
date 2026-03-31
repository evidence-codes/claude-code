export function isSnipMarkerMessage(_message: unknown): boolean {
  return false
}

export function isSnipRuntimeEnabled(): boolean {
  return false
}

export function shouldNudgeForSnips(_messages: unknown[]): boolean {
  return false
}

export function snipCompactIfNeeded<T>(messages: T[]): {
  messages: T[]
  tokensFreed: number
  boundaryMessage?: undefined
} {
  return {
    messages,
    tokensFreed: 0,
  }
}
