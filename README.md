## Error interfaces for BFF and Frontend applications

That repository contain basic TypeScript error interfaces, that should
be used on communication level between Backend Services and BFF layer and
BFF layer and Frontend Application

### Motivation

We should create standards for processing error responses from backend
and transpire it into Frontend application. Different instances of error
objects, should make easy to process errors in some situation.

Currently we are checking only error codes and it have some sense, but
for correct processing of errors, we need additional functionality.

### Structure

We have 2 big types of error types in current repository:

* DefaultError - is the basic class for nesting for all other errors
* HttpError - is a main error class, that provide functionality for all communication error situations

HttpError splite a few groups of errors with hist own interface implementations:

* **ContinueResponse** (1xx codes) - This class of status code indicates a provisional response, consisting only of the Status-Line and optional headers, and is terminated by an empty line. There are no required headers for this class of status code. Since HTTP/1.0 did not define any 1xx status codes, servers MUST NOT send a 1xx response to an HTTP/1.0 client except under experimental conditions.
A client MUST be prepared to accept one or more 1xx status responses prior to a regular response, even if the client does not expect a 100 (Continue) status message. Unexpected 1xx status responses MAY be ignored by a user agent.
Proxies MUST forward 1xx responses, unless the connection between the proxy and its client has been closed, or unless the proxy itself requested the generation of the 1xx response. (For example, if a
proxy adds a "Expect: 100-continue" field when it forwards a request, then it need not forward the corresponding 100 (Continue) response(s).)
* **SuccessResponse** (2xx codes) - This class of status code indicates that the client's request was successfully received, understood, and accepted.
* **RedirectionResponse** (3xx codes) - This class of status code indicates that further action needs to be taken by the user agent in order to fulfill the request. The action required MAY be carried out by the user agent without interaction with the user if and only if the method used in the second request is GET or HEAD. A client SHOULD detect infinite redirection loops, since such loops generate network traffic for each redirection.
* **ClientErrorResponse** (4xx codes) - The 4xx class of status code is intended for cases in which the client seems to have erred. Except when responding to a HEAD request, the server SHOULD include an entity containing an explanation of the error situation, and whether it is a temporary or permanent condition. These status codes are applicable to any request method. User agents SHOULD display any included entity to the user.
If the client is sending data, a server implementation using TCP SHOULD be careful to ensure that the client acknowledges receipt of the packet(s) containing the response, before the server closes the input connection. If the client continues sending data to the server after the close, the server's TCP stack will send a reset packet to the client, which may erase the client's unacknowledged input buffers before they can be read and interpreted by the HTTP application.
* **ServerErrorResponse** (5xx codes) - Response status codes beginning with the digit "5" indicate cases in which the server is aware that it has erred or is incapable of performing the request. Except when responding to a HEAD request, the server SHOULD include an entity containing an explanation of the error situation, and whether it is a temporary or permanent condition. User agents SHOULD display any included entity to the user. These response codes are applicable to any request method.

### Using of errors

It is wery easy, to inport a required error code and use them

```typescript
import { Error401 } from 'web-errors'

throw new Error401(new Error('You should be authorisex to do it'))
```

### Detecting of some group error type

If you need to detect some group of error and make reaction to it, you can use `instanceof` typecheck

```typescript
import {ClientErrorResponse, ServerErrorResponse} from 'web-errors'

(async (dispatch) => {
    try {
        let data = await fetch('http://example.com')
        dispatch(someAction(data))
    } catch (error) {
        if (error instanceof ClientErrorResponse) {
            return new Error('You have a wrong data')
        }

        if (error instanceof ServerErrorResponse) {
            return new Error('Servers are down')
        }
    }
})()
```

### Custom errors in service libraries

You can create your own errors, extending basic objects

```typescript
import { Error401 } from 'web-errors'

class MissTokenError extends Error401 {
    message = 'You forgot a bearer token in headers!'
    description = 'Every request should contain bearer token in header abcf-auth-token'
}
```
