import { getDeliveryDate } from './'

it('get date for delivery', () => {
  expect.assertions(4)
  expect(getDeliveryDate(5)).not.toBeNull()
  expect(getDeliveryDate(5)).not.toBeUndefined()
  expect(typeof getDeliveryDate(5) === 'string').toBe(true)
  expect(new Date(getDeliveryDate(5)) > new Date()).toBe(true)
})
