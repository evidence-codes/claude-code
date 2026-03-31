export function parseConnectUrl(url: string): {
  url: string
  baseUrl: string
  environmentId: string
  sessionId: string
} {
  return {
    url,
    baseUrl: '',
    environmentId: '',
    sessionId: '',
  }
}
