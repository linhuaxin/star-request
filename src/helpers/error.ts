import { RequestConfig, StarResponse } from '../types'

export class StarError extends Error {
  isStarError: boolean
  config: RequestConfig
  code?: string | null
  request?: any
  response?: StarResponse

  constructor(
    message: string,
    config: RequestConfig,
    code?: string | null,
    request?: any,
    response?: StarResponse
  ) {
    super(message)

    this.isStarError = true
    this.config = config
    this.code = code
    this.request = request
    this.response = response

    Object.setPrototypeOf(this, StarError.prototype)
  }
}

export function createError(
  message: string,
  config: RequestConfig,
  code?: string | null,
  request?: any,
  response?: StarResponse
) {
  const error = new StarError(message, config, code, request, response)
  return error
}
