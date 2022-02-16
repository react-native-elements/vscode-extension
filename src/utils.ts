export function once<F extends Function>(fn: F): F {
  let called = false;
  let result: any;

  return function onceified(this: any) {
    if (!called) {
      result = fn.apply(this, arguments);
      called = true;
    }
    return result;
  } as any;
}
