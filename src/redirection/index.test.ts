import {
  Error300,
  Error301,
  Error302,
  Error303,
  Error304,
  Error305,
  Error306,
  Error307,
  Error308,
} from '../index'

describe('Client error responses', async () => {
  test('Error300', async () => {
    const obj = new Error300(new Error())

    expect(obj).toBeInstanceOf(Error300)
    expect(obj).toHaveProperty('status', 300)
    expect(obj).toHaveProperty('message', 'Multiple Choices')
  })

  test('Error301', async () => {
    const obj = new Error301(new Error())

    expect(obj).toBeInstanceOf(Error301)
    expect(obj).toHaveProperty('status', 301)
    expect(obj).toHaveProperty('message', 'Moved Permanently')
  })

  test('Error302', async () => {
    const obj = new Error302(new Error())

    expect(obj).toBeInstanceOf(Error302)
    expect(obj).toHaveProperty('status', 302)
    expect(obj).toHaveProperty('message', 'Found')
  })

  test('Error303', async () => {
    const obj = new Error303(new Error())

    expect(obj).toBeInstanceOf(Error303)
    expect(obj).toHaveProperty('status', 303)
    expect(obj).toHaveProperty('message', 'See Other')
  })

  test('Error304', async () => {
    const obj = new Error304(new Error())

    expect(obj).toBeInstanceOf(Error304)
    expect(obj).toHaveProperty('status', 304)
    expect(obj).toHaveProperty('message', 'Not Modified')
  })

  test('Error305', async () => {
    const obj = new Error305(new Error())

    expect(obj).toBeInstanceOf(Error305)
    expect(obj).toHaveProperty('status', 305)
    expect(obj).toHaveProperty('message', 'Use Proxy')
  })

  test('Error306', async () => {
    const obj = new Error306(new Error())

    expect(obj).toBeInstanceOf(Error306)
    expect(obj).toHaveProperty('status', 306)
    expect(obj).toHaveProperty('message', 'Switch Proxy')
  })

  test('Error307', async () => {
    const obj = new Error307(new Error())

    expect(obj).toBeInstanceOf(Error307)
    expect(obj).toHaveProperty('status', 307)
    expect(obj).toHaveProperty('message', 'Temporary Redirect')
  })

  test('Error308', async () => {
    const obj = new Error308(new Error())

    expect(obj).toBeInstanceOf(Error308)
    expect(obj).toHaveProperty('status', 308)
    expect(obj).toHaveProperty('message', 'Permanent Redirect')
  })
})
