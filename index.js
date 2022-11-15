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
