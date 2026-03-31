type ErrnoException = NodeJS.ErrnoException

type PromiseWithResolvers<T> = {
  promise: Promise<T>
  resolve(value: T | PromiseLike<T>): void
  reject(reason?: unknown): void
}

declare function resolveAntModel(...args: unknown[]): any
