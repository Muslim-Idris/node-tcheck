function A(v) {
  return (v === null || v === undefined) ? v : v.constructor;
}

function B(v) {
  return (v === null || v === undefined) ? v : v.prototype.constructor;
}

/**
 * Returns true if the type of a and b is equal.
 * You can also pass many parameters, for example tcheck('foo', String, 123, Number).
 *
 * tcheck ( value1: Any, value2: Any [, value3: Any, value4: Any [, ...]] ): Boolean
 */
exports = module.exports = function tcheck() {
  if(arguments.length % 2)
    throw new Error('Number of parameters must be even');

  var i = 0;
  while (i < arguments.length) {
    if (A(arguments[i++]) !== B(arguments[i++]))
      return false;
  }
  return true;
};