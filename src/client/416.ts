import { HttpError } from '../http'
import { ClientErrorResponse } from './index'

class Error extends HttpError implements ClientErrorResponse {
  status = 416
  message = 'Range Not Satisfiable'
  description = 'The client has asked for a portion of the file (byte serving), but the server cannot supply that portion. For example, if the client asked for a part of the file that lies beyond the end of the file. Called "Requested Range Not Satisfiable" previously.'
}

export default Error
