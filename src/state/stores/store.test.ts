import { expect, it } from 'vitest';

it('store should exist', ()=> {
  const store = {test:'test'}
  expect(typeof store).toBe('object')
})