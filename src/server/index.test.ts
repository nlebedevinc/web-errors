import {
  ServerErrorResponse,
  Error500,
  Error501,
  Error502,
  Error503,
  Error504,
  Error505,
  Error506,
  Error507,
  Error508,
  Error510,
  Error511,
} from '../index'

describe('Client error responses', async () => {
  test('Error500', async () => {
    const obj = new Error500(new Error())

    expect(obj).toBeInstanceOf(Error500)
    expect(obj).toHaveProperty('status', 500)
    expect(obj).toHaveProperty('message', 'Internal Server Error')
  })

  test('Error501', async () => {
    const obj = new Error501(new Error())

    expect(obj).toBeInstanceOf(Error501)
    expect(obj).toHaveProperty('status', 501)
    expect(obj).toHaveProperty('message', 'Not Implemented')
  })

  test('Error502', async () => {
    const obj = new Error502(new Error())

    expect(obj).toBeInstanceOf(Error502)
    expect(obj).toHaveProperty('status', 502)
    expect(obj).toHaveProperty('message', 'Bad Gateway')
  })

  test('Error503', async () => {
    const obj = new Error503(new Error())

    expect(obj).toBeInstanceOf(Error503)
    expect(obj).toHaveProperty('status', 503)
    expect(obj).toHaveProperty('message', 'Service Unavailable')
  })

  test('Error504', async () => {
    const obj = new Error504(new Error())

    expect(obj).toBeInstanceOf(Error504)
    expect(obj).toHaveProperty('status', 504)
    expect(obj).toHaveProperty('message', 'Gateway Timeout')
  })

  test('Error505', async () => {
    const obj = new Error505(new Error())

    expect(obj).toBeInstanceOf(Error505)
    expect(obj).toHaveProperty('status', 505)
    expect(obj).toHaveProperty('message', 'HTTP Version Not Supported')
  })

  test('Error506', async () => {
    const obj = new Error506(new Error())

    expect(obj).toBeInstanceOf(Error506)
    expect(obj).toHaveProperty('status', 506)
    expect(obj).toHaveProperty('message', 'Variant Also Negotiates')
  })

  test('Error507', async () => {
    const obj = new Error507(new Error())

    expect(obj).toBeInstanceOf(Error507)
    expect(obj).toHaveProperty('status', 507)
    expect(obj).toHaveProperty('message', 'Insufficient Storage')
  })

  test('Error508', async () => {
    const obj = new Error508(new Error())

    expect(obj).toBeInstanceOf(Error508)
    expect(obj).toHaveProperty('status', 508)
    expect(obj).toHaveProperty('message', 'Loop Detected')
  })

  test('Error510', async () => {
    const obj = new Error510(new Error())

    expect(obj).toBeInstanceOf(Error510)
    expect(obj).toHaveProperty('status', 510)
    expect(obj).toHaveProperty('message', 'Not Extended')
  })

  test('Error511', async () => {
    const obj = new Error511(new Error())

    expect(obj).toBeInstanceOf(Error511)
    expect(obj).toHaveProperty('status', 511)
    expect(obj).toHaveProperty('message', 'Network Authentication Required')
  })
})
