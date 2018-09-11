import { HttpError } from '../http'
import { ClientErrorResponse } from './index'

class Error extends HttpError implements ClientErrorResponse {
  status = 406
  message = 'Not Acceptable'
  description = 'The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.'
}

export default Error
