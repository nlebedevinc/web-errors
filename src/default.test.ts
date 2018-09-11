import { DefaultError } from './default'

describe('Default Error Class', async () => {
  test('Full parameters set', async () => {
    const obj = new DefaultError({
      name: 'nameString',
      message: 'messageString',
      stack: 'stackString',
      debug: { debugProp: 'debugPropValue' },
    })

    expect(obj).toBeInstanceOf(DefaultError)
    expect(obj).toHaveProperty('name', 'nameString')
    expect(obj).toHaveProperty('message', 'messageString')
    expect(obj).toHaveProperty('stack', 'stackString')
    expect(obj).toHaveProperty('debug', { debugProp: 'debugPropValue' })
  })

  test('Not full parameters set', async () => {
    const obj = new DefaultError({ message: 'messageString', name: 'nameString' })

    expect(obj).toBeInstanceOf(DefaultError)
    expect(obj).toHaveProperty('message', 'messageString')
  })
})
