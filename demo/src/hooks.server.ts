import { init } from '@jill64/sentry-sveltekit-cloudflare/server'

const { onHandle, onError } = init('')

export const handle = onHandle()
export const handleError = onError()
