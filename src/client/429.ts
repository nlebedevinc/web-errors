import { HttpError } from '../http'
import { ClientErrorResponse } from './index'

class Error extends HttpError implements ClientErrorResponse {
  status = 429
  message = 'Too Many Requests'
  description = 'The user has sent too many requests in a given amount of time. Intended for use with rate-limiting schemes.'
}

export default Error
