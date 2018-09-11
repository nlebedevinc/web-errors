import { HttpError } from '../http'
import { SuccessResponse } from './index'

class Error extends HttpError implements SuccessResponse {
  status = 204
  message = 'No Content'
  description = 'The server is a transforming proxy (e.g. a Web accelerator) that received a 200 OK from its origin, but is returning a modified version of the origin\'s response.'
}

export default Error
