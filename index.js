let display = document.getElementById("displayBox");
let buttons = document.getElementsByClassName("botoncitos");

Array.prototype.forEach.call(buttons, function (botoncitos) {
  botoncitos.addEventListener("click", function () {
    if (
      botoncitos.value != "=" &&
      botoncitos.value != "C" &&
      botoncitos.value != "*" &&
      botoncitos.value != "/" &&
      botoncitos.value != "x²" &&
      botoncitos.value != "√" &&
      botoncitos.value != "%" &&
      botoncitos.value != "<=" &&
      botoncitos.value != "±" &&
      botoncitos.value != "sin" &&
      botoncitos.value != "cos" &&
      botoncitos.value != "tan" &&
      botoncitos.value != "log" &&
      botoncitos.value != "x^" &&
      botoncitos.value != "x!" &&
      botoncitos.value != "π" &&
      botoncitos.value != "e" &&
      botoncitos.value != "³√" &&
      botoncitos.value != "n√" &&
      botoncitos.value != "x³"
    ) {
      display.value += botoncitos.value;
    } else if (botoncitos.value === "=") {
      equals();
    } else if (botoncitos.value === "C") {
      clear();
    } else if (botoncitos.value === "*") {
      multiply();
    } else if (botoncitos.value === "/") {
      divide();
    } else if (botoncitos.value === "±") {
      plusMinus();
    } else if (botoncitos.value === "<=") {
      backspace();
    } else if (botoncitos.value === "%") {
      percent();
    } else if (botoncitos.value === "π") {
      pi();
    } else if (botoncitos.value === "x²") {
      square();
    } else if (botoncitos.value === "√") {
      squareRoot();
    } else if (botoncitos.value === "sin") {
      sin();
    } else if (botoncitos.value === "cos") {
      cos();
    } else if (botoncitos.value === "tan") {
      tan();
    } else if (botoncitos.value === "log") {
      log();
    } else if (botoncitos.value === "ln") {
      ln();
    } else if (botoncitos.value === "x^") {
      exponent();
    } else if (botoncitos.value === "x!") {
      factorial();
    } else if (botoncitos.value === "e") {
      exp();
    } else if (botoncitos.value === "³√") {
      cubeRoot();
    } else if (botoncitos.value === "n√") {
      nRoot();
    } else if (botoncitos.value === "x³") {
      cube();
    }
  });
});

function equals() {
  if (display.value.indexOf("^") > -1) {
    let base = display.value.slice(0, display.value.indexOf("^"));
    let exponent = display.value.slice(display.value.indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else if (display.value.indexOf("√") > -1) {
    let root = display.value.slice(0, display.value.indexOf("√"));
    let baseR = display.value.slice(display.value.indexOf("√") + 1);
    display.value = eval("Math.pow(" + baseR + ", 1/" + root + ")");
  } else if (display.value.indexOf("%") > -1) {
    let porcent1 = display.value.slice(0, display.value.indexOf("%"));
    let porcent2 = display.value.slice(display.value.indexOf("%") + 1);
    porcent1 = porcent1 / 100;
    display.value = eval(porcent1 * porcent2);
    console.log(porcent1);
    console.log(porcent2);
  } else {
    try {
      display.value = eval(display.value);
    } catch (error) {
      alert(error);
      clear();
    }
  }
}

function clear() {
  display.value = "";
}

function backspace() {
  display.value = display.value.substring(0, display.value.length - 1);
}

function multiply() {
  display.value += "*";
}

function divide() {
  display.value += "/";
}

function plusMinus() {
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}

function factorial() {
  var number = 1;
  if (display.value === 0) {
    display.value = "1";
  } else if (display.value < 0) {
    display.value = "undefined";
  } else {
    var number = 1;
    for (var i = display.value; i > 0; i--) {
      number *= i;
    }
    display.value = number;
  }
}

function pi() {
  let lastChar = display.value.charAt(display.value.length - 1);
  if (
    lastChar === "*" ||
    lastChar === "/" ||
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "^" ||
    lastChar === "√"
  ) {
    console.log("si");
    display.value += Math.PI;
  } else {
    console.log("no");
    display.value = Math.PI;
  }
}

function square() {
  display.value = eval(display.value * display.value);
}

function squareRoot() {
  display.value = Math.sqrt(display.value);
}

function cube() {
  display.value = eval(display.value * display.value * display.value);
}

function cubeRoot() {
  display.value = Math.cbrt(display.value);
}

function percent() {
  display.value += "%";
}

function sin() {
  display.value = Math.sin(display.value);
}

function cos() {
  display.value = Math.cos(display.value);
}

function tan() {
  display.value = Math.tan(display.value);
}

function log() {
  display.value = Math.log10(display.value);
}

function ln() {
  display.value = Math.log(display.value);
}

function exponent() {
  display.value += "^";
}

function nRoot() {
  display.value += "√";
}

function exp() {
  display.value = Math.exp(display.value);
}









































/*i
import React, { useState } from "react";
import Boton from "./Boton";
import Pantalla from "./Pantalla";

const ContCalc = () => {

  const e = Math.E;
  const π = Math.PI;

  const valores = ["C", "sin", "cos", "tan", "Del", "x³", "x!", "ⁿ√", "log", "+", "x²", "xⁿ", "∛ ", "√", "-", "%", "7", "8", "9", "/", "e", "4", "5", "6", "*", "π", "1", "2", "3", "±", "(", ")", "0", ".", "=",];


  const [ant, setAnt] = useState('');
  const [pos, setPos] = useState('');

 
  function factorial(n) {
    if (n > 1) {
      return n * factorial(n - 1);
    }
    return 1;
  }

  function seno(n) {
    return Math.sin(n);
  }

  function coseno(n) {
    return Math.cos(n);
  }

  function tangente(n) {
    return Math.tan(n);
  }

  function potencia(b, e) {
    return Math.pow(b, e);
  }

  function raiz(n) {
    return Math.sqrt(n);
  }

  function raiz_n(x, n) {
    return Math.pow(x, 1 / n);
  }

  function ln(n) {
    return Math.log(n);
  }

  function log(n) {
    return Math.log10(n);
  }

  function raizCubica(n) {
    return Math.pow(n, 1 / 3);
  }

  const funcion = (valor) => {
    let calculo = '';
    switch (valor) {
      case 'C':
        setAnt('');
        setPos('');
        break;

      case 'Del':
        setAnt(ant.substring(0, ant.length - 1));
        break;


      case 'x²':
        setAnt(ant + 'potencia(');
        setPos(',2)' + pos);
        break;

      case 'x³':
        setAnt(ant + 'potencia(');
        setPos(',3)' + pos);
        break;

      case 'xⁿ':
        setAnt('potencia(' + ant + ',');
        setPos(')' + pos);
        break;

      case '√':
        setAnt(ant + 'raiz(');
        setPos(')' + pos);
        break;

      case '∛':
        setAnt(ant + 'raizCubica(');
        setPos(')' + pos);
        break;

      case 'ⁿ√':
        setAnt('raiz_n(' + ant + ',');
        setPos(')' + pos);
        break;

      case 'sin':
        setAnt(ant + 'seno(');
        setPos(')' + pos);
        break;

      case 'cos':
        setAnt(ant + 'coseno(');
        setPos(')' + pos);
        break;

      case 'tg':
        setAnt(ant + 'tangente(');
        setPos(')' + pos);
        break;

      case 'ln':
        setAnt(ant + 'ln(');
        setPos(')' + pos);
        break;

      case 'log':
        setAnt(ant + 'log(');
        setPos(')' + pos);
        break;

      case 'x!':
        setAnt(ant + 'factorial(');
        setPos(')' + pos);
        break;

      case '=':
        try {
          calculo = eval(ant + pos);
        } catch (error) {
          calculo = "ERROR";
        }
        setAnt(calculo);
        setPos('');
        break;

      default:
        setAnt(ant + valor);
    }
  };

  return (
    <>
      <Pantalla resultado={ant + pos} />

      <div id="cont-botones">

        {valores.map((k) => (

          <Boton 
          valor={k} 
          className={k === "=" ? "bEquals" : k === "+" || k === "-" || k === "*" || k === "/" || k === "." || k === "(" || k === ")" || k === "±" ? "botoncitos basicas" : k === "1" || k === "2" || k === "3" || k === "4" || k === "5" || k === "6" || k === "7" || k === "8" || k === "9" || k === "0" ? "botoncitos numeros" : k === "C" || k === "Del" ? "botoncitos borrar" : "botoncitos"} funcion={funcion}/>

        ))}

      </div>
    </>
  );
};

export default ContCalc;

*/
