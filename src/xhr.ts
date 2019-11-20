import { RequestConfig, ResponsePromise, Response } from './types'
import { parseHeaders } from './helpers/headers'

export default function xhr(config: RequestConfig): ResponsePromise {
  const { url, method = 'get', data = null, headers, responseType } = config
  const request = new XMLHttpRequest()

  return new Promise(resolve => {
    if (responseType) {
      request.responseType = responseType
    }

    request.open(method.toUpperCase(), url, true)

    request.onreadystatechange = function() {
      if (request.readyState !== 4) {
        return
      }

      const responseHeaders = parseHeaders(request.getAllResponseHeaders())
      const responseData =
        responseType && responseType !== 'text' ? request.response : request.responseText
      const response: Response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      resolve(response)
    }

    Object.keys(headers).forEach(name => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })

    request.send(data)
  })
}
