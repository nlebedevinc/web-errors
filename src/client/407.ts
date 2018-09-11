import { HttpError } from '../http'
import { ClientErrorResponse } from './index'

class Error extends HttpError implements ClientErrorResponse {
  status = 407
  message = 'Proxy Authentication Required'
  description = 'The client must first authenticate itself with the proxy.'
}

export default Error
