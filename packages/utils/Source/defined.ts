/**
 * @function defined
 * @template T
 *
 * @param {T} value The object.
 * @returns {boolean} Returns true if the object is defined, returns false otherwise.
 *
 * @example
 * if (Cesium.defined(positions)) {
 *      doSomething();
 * } else {
 *      doSomethingElse();
 * }
 */
export default function defined<Type>(value: Type): value is NonNullable<Type> {
  return value !== undefined && value !== null;
}
