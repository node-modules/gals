import { AsyncLocalStorage } from 'node:async_hooks';

export const kGALS = Symbol.for('gals#asyncLocalStorage');

export function getAsyncLocalStorage() {
  const g: any = globalThis;
  if (!g[kGALS]) {
    g[kGALS] = new AsyncLocalStorage();
  }
  return g[kGALS];
}
