import { HttpError } from '../http'
import { ClientErrorResponse } from './index'

class Error extends HttpError implements ClientErrorResponse {
  status = 423
  message = 'Locked'
  description = 'The resource that is being accessed is locked.'
}

export default Error
