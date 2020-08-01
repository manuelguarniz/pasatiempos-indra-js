export const isOdd = (value: number) => {
  if (typeof value !== 'number') {
    return new Error('Value ingresado no es numerico');
  }
  if (value === undefined || value === null) {
    return new Error('Value ingresado no esta definido o es nulo');
  }
  return value % 2 !== 0
}