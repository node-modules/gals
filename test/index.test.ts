import { strict as assert } from 'node:assert';
import { getAsyncLocalStorage, kGALS } from '../src/index.js';

describe('test/index.test.ts', () => {
  it('should only create one als instance', () => {
    const als1 = getAsyncLocalStorage();
    const als2 = getAsyncLocalStorage();
    assert.equal(als1, als2);
    assert.equal(als1, Reflect.get(globalThis, kGALS));
    assert.equal(als2, Reflect.get(global, kGALS));
  });
});
