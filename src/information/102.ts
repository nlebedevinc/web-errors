import { HttpError } from '../http'
import { ContinueResponse } from './index'

class Error extends HttpError implements ContinueResponse {
  status = 102
  message = 'Processing'
  description = 'A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet. This prevents the client from timing out and assuming the request was lost.'
}

export default Error
