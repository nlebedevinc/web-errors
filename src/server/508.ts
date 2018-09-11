import { HttpError } from '../http'
import { ServerErrorResponse } from './index'

class Error extends HttpError implements ServerErrorResponse {
  status = 508
  message = 'Loop Detected'
  description = 'The server detected an infinite loop while processing the request (sent in lieu of 208 Already Reported)'
}

export default Error
