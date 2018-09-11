import { HttpError } from '../http'
import { ContinueResponse } from './index'

class Error extends HttpError implements ContinueResponse {
  status = 101
  message = 'Switching Protocols'
  description = 'The requester has asked the server to switch protocols and the server has agreed to do so.'
}

export default Error
