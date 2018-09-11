import { HttpError } from '../http'
import { SuccessResponse } from './index'

class Error extends HttpError implements SuccessResponse {
  status = 200
  message = 'OK'
  description = 'Standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request, the response will contain an entity describing or containing the result of the action.'
}

export default Error
