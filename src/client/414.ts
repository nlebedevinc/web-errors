import { HttpError } from '../http'
import { ClientErrorResponse } from './index'

class Error extends HttpError implements ClientErrorResponse {
  status = 414
  message = 'URI Too Long'
  description = 'The URI provided was too long for the server to process. Often the result of too much data being encoded as a query-string of a GET request, in which case it should be converted to a POST request. Called "Request-URI Too Long" previously.'
}

export default Error
