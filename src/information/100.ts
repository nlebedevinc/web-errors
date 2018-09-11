import { HttpError } from '../http'
import { ContinueResponse } from './index'

class Error extends HttpError implements ContinueResponse {
  status = 100
  message = 'Continue'
  description = 'The server has received the request headers and the client should proceed to send the request body (in the case of a request for which a body needs to be sent; for example, a POST request). Sending a large request body to a server after a request has been rejected for inappropriate headers would be inefficient. To have a server check the request\'s headers, a client must send Expect: 100-continue as a header in its initial request and receive a 100 Continue status code in response before sending the body. If the client receives an error code such as 403 (Forbidden) or 405 (Method Not Allowed) then it shouldn\'t send the request\'s body. The response 417 Expectation Failed indicates that the request should be repeated without the Expect header as it indicates that the server doesn\'t support expectations (this is the case, for example, of HTTP/1.0 servers).'
}

export default Error
