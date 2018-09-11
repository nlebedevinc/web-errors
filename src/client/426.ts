import { HttpError } from '../http'
import { ClientErrorResponse } from './index'

class Error extends HttpError implements ClientErrorResponse {
  status = 426
  message = 'Upgrade Required'
  description = 'The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.'
}

export default Error
