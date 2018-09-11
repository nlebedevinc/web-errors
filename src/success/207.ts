import { HttpError } from '../http'
import { SuccessResponse } from './index'

class Error extends HttpError implements SuccessResponse {
  status = 207
  message = 'Multi-Status'
  description = 'The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.'
}

export default Error
