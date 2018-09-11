import { HttpError } from '../http'
import { ClientErrorResponse } from './index'

class Error extends HttpError implements ClientErrorResponse {
  status = 421
  message = 'Misdirected Request'
  description = 'The request was directed at a server that is not able to produce a response (for example because of connection reuse).'
}

export default Error
