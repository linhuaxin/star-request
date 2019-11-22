type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'delete'
  | 'DELETE'
  | 'options'
  | 'OPTIONS'
  | 'head'
  | 'HEAD'
  | 'patch'
  | 'PATCH'

export interface StarRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}

export interface StarResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: StarRequestConfig
  request: any
}

export interface StarPromise extends Promise<StarResponse> {}

export interface StarError extends Error {
  isStarError: boolean
  config: StarRequestConfig
  code?: string
  request?: any
  response?: StarResponse
}

export interface Star {
  request(config: StarRequestConfig): StarPromise

  get(url: string, config?: StarRequestConfig): StarPromise

  delete(url: string, config?: StarRequestConfig): StarPromise

  head(url: string, config?: StarRequestConfig): StarPromise

  options(url: string, config?: StarRequestConfig): StarPromise

  post(url: string, data?: any, config?: StarRequestConfig): StarPromise

  put(url: string, data?: any, config?: StarRequestConfig): StarPromise

  patch(url: string, data?: any, config?: StarRequestConfig): StarPromise
}
