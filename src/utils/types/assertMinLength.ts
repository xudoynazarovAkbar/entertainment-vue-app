export function assertArray<T>(value: unknown): asserts value is T[] {
  if (!Array.isArray(value)) {
    throw new Error('Expected an array')
  }
}
