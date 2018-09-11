import { HttpError } from '../http'
import { RedirectionResponse } from './index'

class Error extends HttpError implements RedirectionResponse {
  status = 306
  message = 'Switch Proxy'
  description = 'No longer used. Originally meant "Subsequent requests should use the specified proxy.'
}

export default Error
