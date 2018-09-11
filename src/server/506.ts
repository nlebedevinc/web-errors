import { HttpError } from '../http'
import { ServerErrorResponse } from './index'

class Error extends HttpError implements ServerErrorResponse {
  status = 506
  message = 'Variant Also Negotiates'
  description = 'Transparent content negotiation for the request results in a circular reference.'
}

export default Error
