export interface Transport {
  connect?(): Promise<void> | void
  close?(): void
  write?(message: unknown): Promise<void>
  setOnData?(callback: (data: string) => void): void
  setOnConnect?(callback: () => void): void
  setOnClose?(callback: (code?: number) => void): void
  getStateLabel?(): string
}
