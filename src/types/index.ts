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

export interface RequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
}

export interface Response {
  data: any
  status: number
  statusText: string
  headers: any
  config: RequestConfig
  request: any
}

export interface ResponsePromise extends Promise<Response> {}
