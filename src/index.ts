import { StarRequestConfig, StarPromise, StarResponse } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest, transformResponse } from './helpers/data'
import { processHeaders } from './helpers/headers'

function request(config: StarRequestConfig): StarPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

function processConfig(config: StarRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL(config: StarRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function transformRequestData(config: StarRequestConfig): any {
  return transformRequest(config.data)
}

function transformResponseData(res: StarResponse): any {
  res.data = transformResponse(res.data)
  return res
}

function transformHeaders(config: StarRequestConfig): any {
  let { headers = {}, data } = config
  return processHeaders(headers, data)
}

export default request
