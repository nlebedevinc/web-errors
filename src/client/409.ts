import { HttpError } from '../http'
import { ClientErrorResponse } from './index'

class Error extends HttpError implements ClientErrorResponse {
  status = 409
  message = 'Conflict'
  description = 'Indicates that the request could not be processed because of conflict in the request, such as an edit conflict between multiple simultaneous updates.'
}

export default Error
