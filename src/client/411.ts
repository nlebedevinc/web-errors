import { HttpError } from '../http'
import { ClientErrorResponse } from './index'

class Error extends HttpError implements ClientErrorResponse {
  status = 411
  message = 'Length Required'
  description = 'The request did not specify the length of its content, which is required by the requested resource.'
}

export default Error
