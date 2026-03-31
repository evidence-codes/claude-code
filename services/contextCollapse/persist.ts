export function restoreFromEntries(
  commits: unknown[],
  snapshot: unknown,
): {
  commits: unknown[]
  snapshot: unknown
} {
  return { commits, snapshot }
}
