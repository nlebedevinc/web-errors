import {
  Error200,
  Error201,
  Error202,
  Error203,
  Error204,
  Error205,
  Error206,
  Error207,
  Error208,
  Error226,
} from '../index'

describe('Client error responses', async () => {
  test('Error200', async () => {
    const obj = new Error200(new Error())

    expect(obj).toBeInstanceOf(Error200)
    expect(obj).toHaveProperty('status', 200)
    expect(obj).toHaveProperty('message', 'OK')
  })

  test('Error201', async () => {
    const obj = new Error201(new Error())

    expect(obj).toBeInstanceOf(Error201)
    expect(obj).toHaveProperty('status', 201)
    expect(obj).toHaveProperty('message', 'Created')
  })

  test('Error202', async () => {
    const obj = new Error202(new Error())

    expect(obj).toBeInstanceOf(Error202)
    expect(obj).toHaveProperty('status', 202)
    expect(obj).toHaveProperty('message', 'Accepted')
  })

  test('Error203', async () => {
    const obj = new Error203(new Error())

    expect(obj).toBeInstanceOf(Error203)
    expect(obj).toHaveProperty('status', 203)
    expect(obj).toHaveProperty('message', 'Non-Authoritative Information')
  })

  test('Error204', async () => {
    const obj = new Error204(new Error())

    expect(obj).toBeInstanceOf(Error204)
    expect(obj).toHaveProperty('status', 204)
    expect(obj).toHaveProperty('message', 'No Content')
  })

  test('Error205', async () => {
    const obj = new Error205(new Error())

    expect(obj).toBeInstanceOf(Error205)
    expect(obj).toHaveProperty('status', 205)
    expect(obj).toHaveProperty('message', 'Reset Content')
  })

  test('Error206', async () => {
    const obj = new Error206(new Error())

    expect(obj).toBeInstanceOf(Error206)
    expect(obj).toHaveProperty('status', 206)
    expect(obj).toHaveProperty('message', 'Partial Content')
  })

  test('Error207', async () => {
    const obj = new Error207(new Error())

    expect(obj).toBeInstanceOf(Error207)
    expect(obj).toHaveProperty('status', 207)
    expect(obj).toHaveProperty('message', 'Multi-Status')
  })

  test('Error208', async () => {
    const obj = new Error208(new Error())

    expect(obj).toBeInstanceOf(Error208)
    expect(obj).toHaveProperty('status', 208)
    expect(obj).toHaveProperty('message', 'Already Reported')
  })

  test('Error226', async () => {
    const obj = new Error226(new Error())

    expect(obj).toBeInstanceOf(Error226)
    expect(obj).toHaveProperty('status', 226)
    expect(obj).toHaveProperty('message', 'IM Used')
  })
})
