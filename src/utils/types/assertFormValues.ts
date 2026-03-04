export function assertLoginValues(values: unknown): asserts values is { email: string; password: string } {
  if (
    typeof values !== 'object' ||
    values === null ||
    !('email' in values) ||
    !('password' in values)
  ) {
    throw new Error('Invalid login form values')
  }
}

export function assertRegisterValues(values: unknown): asserts values is {
  firstName: string
  lastName: string
  email: string
  password: string
} {
  if (
    typeof values !== 'object' ||
    values === null ||
    !('firstName' in values) ||
    !('lastName' in values) ||
    !('email' in values) ||
    !('password' in values)
  ) {
    throw new Error('Invalid register form values')
  }
}
