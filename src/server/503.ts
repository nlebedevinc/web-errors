import { HttpError } from '../http'
import { ServerErrorResponse } from './index'

class Error extends HttpError implements ServerErrorResponse {
  status = 503
  message = 'Service Unavailable'
  description = 'The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.'
}

export default Error
