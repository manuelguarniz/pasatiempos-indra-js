// abccba -> true
// abccbx -> true
// abcczx -> false
// asdsqw -> false

import Capicua from './capicua.ts';

export default class Main {
  private inputText: string;
  constructor() {
    console.log('constructor Main');
    this.inputText = Deno.args[0];
  }

  public onInit(): void {
    const capicua = new Capicua();
    if (capicua.isPolindromo(this.inputText)) {
      console.log('texto ingresado: ' + this.inputText + ' es capicua.');
    } else {
      console.log('texto ingresado: ' + this.inputText + ' no es capicua.');
    }
  }
}

(new Main()).onInit();