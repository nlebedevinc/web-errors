import { HttpError } from '../http'
import { SuccessResponse } from './index'

class Error extends HttpError implements SuccessResponse {
  status = 208
  message = 'Already Reported'
  description = 'The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.'
}

export default Error
