import { HttpError } from '../http'
import { RedirectionResponse } from './index'

class Error extends HttpError implements RedirectionResponse {
  status = 300
  message = 'Multiple Choices'
  description = 'Indicates multiple options for the resource from which the client may choose (via agent-driven content negotiation). For example, this code could be used to present multiple video format options, to list files with different filename extensions, or to suggest word-sense disambiguation.'
}

export default Error
