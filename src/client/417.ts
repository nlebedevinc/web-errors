import { HttpError } from '../http'
import { ClientErrorResponse } from './index'

class Error extends HttpError implements ClientErrorResponse {
  status = 417
  message = 'Expectation Failed'
  description = 'The server cannot meet the requirements of the Expect request-header field.'
}

export default Error
