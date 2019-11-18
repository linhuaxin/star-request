import {RequestConfig} from './types'

export default function xhr(config: RequestConfig) {
  const { url, method = 'get', data = null } = config
  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)
  request.send(data)
}
