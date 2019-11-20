import { RequestConfig, ResponsePromise, Response } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest, transformResponse } from './helpers/data'
import { processHeaders } from './helpers/headers'

function request(config: RequestConfig): ResponsePromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

function processConfig(config: RequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL(config: RequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function transformRequestData(config: RequestConfig): any {
  return transformRequest(config.data)
}

function transformResponseData(res: Response): any {
  res.data = transformResponse(res.data)
  return res
}

function transformHeaders(config: RequestConfig): any {
  let { headers = {}, data } = config
  return processHeaders(headers, data)
}

export default request
