import { RequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'

function request(config: RequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: RequestConfig): void {
  config.url = transformURL(config)
}

function transformURL(config: RequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

export default request
