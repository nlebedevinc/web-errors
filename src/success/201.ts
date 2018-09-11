import { HttpError } from '../http'
import { SuccessResponse } from './index'

class Error extends HttpError implements SuccessResponse {
  status = 201
  message = 'Created'
  description = 'The request has been fulfilled, resulting in the creation of a new resource.'
}

export default Error
