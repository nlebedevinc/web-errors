import { HttpError } from '../http'
import { ServerErrorResponse } from './index'

class Error extends HttpError implements ServerErrorResponse {
  status = 510
  message = 'Not Extended'
  description = 'Further extensions to the request are required for the server to fulfil it.'
}

export default Error
