import { HttpError } from '../http'
import { ContinueResponse } from './index'

class Error extends HttpError implements ContinueResponse {
  status = 103
  message = 'Early Hints'
  description = 'Used to return some response headers before final HTTP message.'
}

export default Error
