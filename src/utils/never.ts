import assert from 'node:assert'

export default function never (message = 'Unexpected call to never()'): never {
  throw new assert.AssertionError({
    message,
    stackStartFn: never,
  })
}
