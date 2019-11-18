import {RequestConfig} from './types'

export default function xhr(config: RequestConfig) {
  const { url, method = 'get', data = null } = config
  const request = new XMLHttpRequest()

  request.open(url.toUpperCase(), method, true)
  request.send(data)
}
