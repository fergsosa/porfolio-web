function caulEsMaayor(a, b) {
  return a > b ? "mayor" : "menor";
  // if (a > b) {
  //   return a;
  // } else {
  //   return b;
  // }
}
let mayor = caulEsMaayor(10, 5);

console.log("es", mayor);

// * Nombre: ancho x alto
// * 8k       7680 x 4320
// * 4K       3840 x 2160
// * WQHD     2560 x 1440
// * FHD      1920 x 1080
// * HD       1280 x 720

function nombreResolucion(ancho, alto) {
  if (ancho >= 7680 && alto >= 4320) {
    return "8k";
  } else if (ancho >= 3840 && alto >= 2160) {
    return "4k";
  } else if (ancho >= 2560 && alto >= 1440) {
    return "QWHD";
  } else if (ancho >= 1920 && alto >= 1080) {
    return "fHD";
  } else if (ancho >= 1280 && alto >= 720) {
    return "HD";
  } else {
    return "no es ninguna";
  }
}

let nombre = nombreResolucion(4333, 2789);
console.log(nombre);

// * Indice validar que no sea menor a cero y que el elemento exista en el array

function getbyldx(arr, idx) {
  if (idx < 0 || arr.length <= idx) {
    return "Elemento no existe";
  }
  return arr[idx];
}

let resultado = getbyldx([1, 2, 3], 3);
console.log(resultado);

// * Crear algoritmo que imprima números impares

let i = 0;
while (i <= 10) {
  if (i % 2 !== 0) {
    console.log("impar", i);
  }
  i++;
}

// TODO [  posible pregunta tecnica  ]
// * Crear algoritmo que devuelva número
// * menor y mayor de un arraya

let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
  let menor = arr[0];
  let mayor = arr[0];
  for (let numero of arr) {
    menor = menor < numero ? menor : numero;
    mayor = mayor > numero ? mayor : numero;
  }
  return [menor, mayor];
}

let numeros = getMenorMayor(array);
console.log(numeros);

// * Crear algoritmo que devuelva Eantidad
// * de números positivos de un array.

let array2 = [2, 5, 7, 15, -5, -10, 55];
function cuantosPositivos(arr) {
  let cantidad = 0;
  for (let elemento of arr) {
    if (elemento > 0) {
      cantidad++;
    }
  }
  return cantidad;
}

let resultado2 = cuantosPositivos(array2);
console.log(resultado2);

// * Crear algori tmo que devuelva
// * el precio del producto
// * más impuesto

function precioCompleto(precio, impuesto) {
  return precio + precio * impuesto;
}

let resultado3 = precioCompleto(19.9, 0.15);
console.log(resultado3);

// * crear algoritmo que tome un array de
// * objetos y devuelva un array de pares
let array4 = [
  { id: 1, name: "Nicolas" },
  { id: 2, name: "Felipe" },
  { id: 3, name: "Chanchito" },
];
let pares = [
  [1, { id: 1, name: "Nicolas" }],
  [2, { id: 2, name: "Felipe" }],
  [3, { id: 3, name: "Chanchito" }],
];

function toPairs(arr) {
  let pairs = [];
  for (let idx in arr) {
    let elemento = arr[idx];
    pairs[idx] = [elemento.id, elemento];
  }
  return pairs;
}

let resultado4 = toPairs(array);
console.log(resultado4);
