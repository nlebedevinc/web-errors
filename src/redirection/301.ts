import { HttpError } from '../http'
import { RedirectionResponse } from './index'

class Error extends HttpError implements RedirectionResponse {
  status = 301
  message = 'Moved Permanently'
  description = 'This and all future requests should be directed to the given URI.'
}

export default Error
