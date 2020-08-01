import { isOdd } from "./utils.ts";

export default class Capicua {
  constructor() {
    console.log('constructor capicua');
  }
  public isPolindromo(value: string): boolean {
    let isSuccess = false;
    if (value !== undefined && value !== null) {
      let countErros = 0;
      const chars = value.split('');
      for (let index = 0; index < (chars.length / 2); index++) {
        const modificadorFinalCadena = chars.length - 1 - index;
        // console.log(`compara ->
        //             index: ${index}, valor-i: ${chars[index]},
        //             valor-f: ${modificadorFinalCadena}, valor-f: ${chars[modificadorFinalCadena]}`)
        if (chars[index] !== chars[modificadorFinalCadena]) {
          countErros++;
        }
      }
      // valor podria ser polindromo
      // isSuccess = countErros < 2;
      isSuccess = countErros < 1;
    }
    return isSuccess;
  }
}
