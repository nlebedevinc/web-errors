import { HttpError } from '../http'
import { RedirectionResponse } from './index'

class Error extends HttpError implements RedirectionResponse {
  status = 303
  message = 'See Other'
  description = 'The response to the request can be found under another URI using the GET method. When received in response to a POST (or PUT/DELETE), the client should presume that the server has received the data and should issue a new GET request to the given URI.'
}

export default Error
