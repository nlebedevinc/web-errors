import { HttpError } from '../http'
import { RedirectionResponse } from './index'

class Error extends HttpError implements RedirectionResponse {
  status = 308
  message = 'Permanent Redirect'
  description = 'The request and all future requests should be repeated using another URI. 307 and 308 parallel the behaviors of 302 and 301, but do not allow the HTTP method to change. So, for example, submitting a form to a permanently redirected resource may continue smoothly.'
}

export default Error
