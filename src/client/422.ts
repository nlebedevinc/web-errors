import { HttpError } from '../http'
import { ClientErrorResponse } from './index'

class Error extends HttpError implements ClientErrorResponse {
  status = 422
  message = 'Unprocessable Entity'
  description = 'The request was well-formed but was unable to be followed due to semantic errors.'
}

export default Error
