/**
 * Interface that should describe default error object
 */
interface DefaultErrorProps extends Error {
  /**
   * Error name
   */
  name: string;
  /**
   * Error message
   */
  message: string;
  /**
   * Error callstack
   */
  stack?: string;
  /**
   * Additional debug information that should help detect a problem
   */
  readonly debug?: Record<string, unknown>;
}

class DefaultError extends Error {
  /**
   * Additional debug information that should help detect a problem
   */
  public readonly debug: Record<string, unknown> | undefined

  constructor(props: DefaultErrorProps) {
    super(props.message)

    this.message = props.message
    this.name = props.name
    if (props.stack) this.stack = props.stack
    if (props.debug) this.debug = props.debug
  }
}

export {
  DefaultError,
  DefaultErrorProps,
}
