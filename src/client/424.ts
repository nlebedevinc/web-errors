import { HttpError } from '../http'
import { ClientErrorResponse } from './index'

class Error extends HttpError implements ClientErrorResponse {
  status = 424
  message = 'Failed Dependency'
  description = 'The request failed because it depended on another request and that request failed (e.g., a PROPPATCH).'
}

export default Error
