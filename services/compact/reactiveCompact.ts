export function isReactiveOnlyMode(): boolean {
  return false
}

export async function reactiveCompactOnPromptTooLong(
  ..._args: unknown[]
): Promise<{ ok: false }> {
  return { ok: false }
}
