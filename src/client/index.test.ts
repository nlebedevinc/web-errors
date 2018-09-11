import {
  ClientErrorResponse,
  Error451,
  Error431,
  Error429,
  Error428,
  Error426,
  Error424,
  Error423,
  Error422,
  Error421,
  Error418,
  Error417,
  Error416,
  Error415,
  Error414,
  Error413,
  Error412,
  Error411,
  Error410,
  Error409,
  Error408,
  Error407,
  Error406,
  Error405,
  Error404,
  Error403,
  Error402,
  Error401,
  Error400,
} from '../index'

describe('Client error responses', async () => {
  test('Error400', async () => {
    const obj = new Error400(new Error())

    expect(obj).toBeInstanceOf(Error400)
    expect(obj).toHaveProperty('status', 400)
    expect(obj).toHaveProperty('message', 'Bad Request')
  })

  test('Error401', async () => {
    const obj = new Error401(new Error())

    expect(obj).toBeInstanceOf(Error401)
    expect(obj).toHaveProperty('status', 401)
    expect(obj).toHaveProperty('message', 'Unauthorized')
  })

  test('Error402', async () => {
    const obj = new Error402(new Error())

    expect(obj).toBeInstanceOf(Error402)
    expect(obj).toHaveProperty('status', 402)
    expect(obj).toHaveProperty('message', 'Payment Required')
  })

  test('Error403', async () => {
    const obj = new Error403(new Error())

    expect(obj).toBeInstanceOf(Error403)
    expect(obj).toHaveProperty('status', 403)
    expect(obj).toHaveProperty('message', 'Forbidden')
  })

  test('Error404', async () => {
    const obj = new Error404(new Error())

    expect(obj).toBeInstanceOf(Error404)
    expect(obj).toHaveProperty('status', 404)
    expect(obj).toHaveProperty('message', 'Not Found')
  })

  test('Error405', async () => {
    const obj = new Error405(new Error())

    expect(obj).toBeInstanceOf(Error405)
    expect(obj).toHaveProperty('status', 405)
    expect(obj).toHaveProperty('message', 'Method Not Allowed')
  })

  test('Error406', async () => {
    const obj = new Error406(new Error())

    expect(obj).toBeInstanceOf(Error406)
    expect(obj).toHaveProperty('status', 406)
    expect(obj).toHaveProperty('message', 'Not Acceptable')
  })

  test('Error407', async () => {
    const obj = new Error407(new Error())

    expect(obj).toBeInstanceOf(Error407)
    expect(obj).toHaveProperty('status', 407)
    expect(obj).toHaveProperty('message', 'Proxy Authentication Required')
  })

  test('Error408', async () => {
    const obj = new Error408(new Error())

    expect(obj).toBeInstanceOf(Error408)
    expect(obj).toHaveProperty('status', 408)
    expect(obj).toHaveProperty('message', 'Request Timeout')
  })

  test('Error409', async () => {
    const obj = new Error409(new Error())

    expect(obj).toBeInstanceOf(Error409)
    expect(obj).toHaveProperty('status', 409)
    expect(obj).toHaveProperty('message', 'Conflict')
  })

  test('Error410', async () => {
    const obj = new Error410(new Error())

    expect(obj).toBeInstanceOf(Error410)
    expect(obj).toHaveProperty('status', 410)
    expect(obj).toHaveProperty('message', 'Gone')
  })

  test('Error411', async () => {
    const obj = new Error411(new Error())

    expect(obj).toBeInstanceOf(Error411)
    expect(obj).toHaveProperty('status', 411)
    expect(obj).toHaveProperty('message', 'Length Required')
  })

  test('Error412', async () => {
    const obj = new Error412(new Error())

    expect(obj).toBeInstanceOf(Error412)
    expect(obj).toHaveProperty('status', 412)
    expect(obj).toHaveProperty('message', 'Precondition Failed')
  })

  test('Error413', async () => {
    const obj = new Error413(new Error())

    expect(obj).toBeInstanceOf(Error413)
    expect(obj).toHaveProperty('status', 413)
    expect(obj).toHaveProperty('message', 'Payload Too Large')
  })

  test('Error414', async () => {
    const obj = new Error414(new Error())

    expect(obj).toBeInstanceOf(Error414)
    expect(obj).toHaveProperty('status', 414)
    expect(obj).toHaveProperty('message', 'URI Too Long')
  })

  test('Error415', async () => {
    const obj = new Error415(new Error())

    expect(obj).toBeInstanceOf(Error415)
    expect(obj).toHaveProperty('status', 415)
    expect(obj).toHaveProperty('message', 'Unsupported Media Type')
  })

  test('Error416', async () => {
    const obj = new Error416(new Error())

    expect(obj).toBeInstanceOf(Error416)
    expect(obj).toHaveProperty('status', 416)
    expect(obj).toHaveProperty('message', 'Range Not Satisfiable')
  })

  test('Error417', async () => {
    const obj = new Error417(new Error())

    expect(obj).toBeInstanceOf(Error417)
    expect(obj).toHaveProperty('status', 417)
    expect(obj).toHaveProperty('message', 'Expectation Failed')
  })

  test('Error418', async () => {
    const obj = new Error418(new Error())

    expect(obj).toBeInstanceOf(Error418)
    expect(obj).toHaveProperty('status', 418)
    expect(obj).toHaveProperty('message', 'I\'m a teapot')
  })

  test('Error421', async () => {
    const obj = new Error421(new Error())

    expect(obj).toBeInstanceOf(Error421)
    expect(obj).toHaveProperty('status', 421)
    expect(obj).toHaveProperty('message', 'Misdirected Request')
  })

  test('Error422', async () => {
    const obj = new Error422(new Error())

    expect(obj).toBeInstanceOf(Error422)
    expect(obj).toHaveProperty('status', 422)
    expect(obj).toHaveProperty('message', 'Unprocessable Entity')
  })

  test('Error423', async () => {
    const obj = new Error423(new Error())

    expect(obj).toBeInstanceOf(Error423)
    expect(obj).toHaveProperty('status', 423)
    expect(obj).toHaveProperty('message', 'Locked')
  })

  test('Error424', async () => {
    const obj = new Error424(new Error())

    expect(obj).toBeInstanceOf(Error424)
    expect(obj).toHaveProperty('status', 424)
    expect(obj).toHaveProperty('message', 'Failed Dependency')
  })

  test('Error426', async () => {
    const obj = new Error426(new Error())

    expect(obj).toBeInstanceOf(Error426)
    expect(obj).toHaveProperty('status', 426)
    expect(obj).toHaveProperty('message', 'Upgrade Required')
  })

  test('Error428', async () => {
    const obj = new Error428(new Error())

    expect(obj).toBeInstanceOf(Error428)
    expect(obj).toHaveProperty('status', 428)
    expect(obj).toHaveProperty('message', 'Precondition Required')
  })

  test('Error429', async () => {
    const obj = new Error429(new Error())

    expect(obj).toBeInstanceOf(Error429)
    expect(obj).toHaveProperty('status', 429)
    expect(obj).toHaveProperty('message', 'Too Many Requests')
  })

  test('Error431', async () => {
    const obj = new Error431(new Error())

    expect(obj).toBeInstanceOf(Error431)
    expect(obj).toHaveProperty('status', 431)
    expect(obj).toHaveProperty('message', 'Request Header Fields Too Large')
  })

  test('Error451', async () => {
    const obj = new Error451(new Error())

    expect(obj).toBeInstanceOf(Error451)
    expect(obj).toHaveProperty('status', 451)
    expect(obj).toHaveProperty('message', 'Unavailable For Legal Reasons')
  })
})
