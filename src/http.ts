import { DefaultErrorProps, DefaultError } from './default'

/**
 * Error description interface, that provided by backend services
 */
interface ErrorsStack {
  /**
   * Response code received from BE side
   */
  code: string;
  /**
   * Response error message received from BE side
   */
  message: string;
}

/**
 * Describe an Error response from BFF layer to FE application
 */
interface HttpErrorProps extends DefaultErrorProps {
  /**
   * HTTP status code, described that error
   */
  readonly status?: number;
  /**
   * Errors stack, received from backend services
   */
  readonly errorsStack?: ErrorsStack[];
  /**
   * Detailed description of error that should be presented to user
   */
  readonly description?: string;
}

/**
 * Describe and HTTP Error
 *
 * That error type should be used for transporting errors from BFF layer to FE application
 */
class HttpError extends DefaultError {
  public readonly status: number
  public readonly errorsStack: ErrorsStack[] | undefined = []

  constructor(props: HttpErrorProps) {
    super(props)

    this.status = props.status || 500
    this.message = props.message || 'Internal Server Error'
    this.errorsStack = props.errorsStack || undefined
  }
}

export {
  HttpError,
  HttpErrorProps,
  ErrorsStack,
}
