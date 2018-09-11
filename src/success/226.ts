import { HttpError } from '../http'
import { SuccessResponse } from './index'

class Error extends HttpError implements SuccessResponse {
  status = 226
  message = 'IM Used'
  description = 'The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.'
}

export default Error
