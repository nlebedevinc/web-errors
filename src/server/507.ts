import { HttpError } from '../http'
import { ServerErrorResponse } from './index'

class Error extends HttpError implements ServerErrorResponse {
  status = 507
  message = 'Insufficient Storage'
  description = 'The server is unable to store the representation needed to complete the request.'
}

export default Error
