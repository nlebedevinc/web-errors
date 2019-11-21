import {
  Error100,
  Error101,
  Error102,
  Error103,
} from '../index'

describe('Client error responses', () => {
  test('Error100', async () => {
    const obj = new Error100(new Error())

    expect(obj).toBeInstanceOf(Error100)
    expect(obj).toHaveProperty('status', 100)
    expect(obj).toHaveProperty('message', 'Continue')
  })

  test('Error101', async () => {
    const obj = new Error101(new Error())

    expect(obj).toBeInstanceOf(Error101)
    expect(obj).toHaveProperty('status', 101)
    expect(obj).toHaveProperty('message', 'Switching Protocols')
  })

  test('Error102', async () => {
    const obj = new Error102(new Error())

    expect(obj).toBeInstanceOf(Error102)
    expect(obj).toHaveProperty('status', 102)
    expect(obj).toHaveProperty('message', 'Processing')
  })

  test('Error103', async () => {
    const obj = new Error103(new Error())

    expect(obj).toBeInstanceOf(Error103)
    expect(obj).toHaveProperty('status', 103)
    expect(obj).toHaveProperty('message', 'Early Hints')
  })
})
