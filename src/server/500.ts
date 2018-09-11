import { HttpError } from '../http'
import { ServerErrorResponse } from './index'

class Error extends HttpError implements ServerErrorResponse {
  status = 500
  message = 'Internal Server Error'
  description = 'A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.'
}

export default Error
