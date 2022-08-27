// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
// return Object.entries(objeto); ==> eso daría el mismo resultado.
  //Escribe tu código aquí
  var matr = [];
  for (let clv in objeto) {
    matr.push([clv,objeto[clv]]);
  }
  return matr;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let ob = {};
  for ( i = 0; i < string.length; i++){
    if (ob[string[i]] === undefined){
      ob[string[i]] = 1;
    } else {
      ob[string[i]] = (ob[string[i]]+1);
    }
  }
  return ob;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  //mi primera opcion:-->let uno = s.match(/\p{Lu}/gu);
  //-------------------->let dos = s.match(/\p{Ll}/gu);
  //-------------------->return uno.join('')+dos.join('');
  let may = [];
  let minu = [];
  for (i = 0; i < s.length; i++){
    if (s[i] === s[i].toUpperCase()){
      may.push(s[i]);
    } else {
      minu.push(s[i]);
    }
  } return may.join('')+minu.join('');
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let espejo = [];
  let palabras = str.split(' ')
  for (i = 0; i < palabras.length; i++){
    let palabra = palabras[i];
    let invertida = [];
    for(j = 0; j < palabra.length; j++){
      invertida.unshift(palabra[j]);
    };
    espejo.push(invertida.join(''));
    espejo.push (' ');
  };
  espejo.pop();
  return espejo.join('');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  //var str = String(numero);
  var arr = String(numero).split('');
  var rev = [];
  for ( i= arr.length-1; i >= 0; i--){
    rev.push(arr[i])
  };
  if (arr.join() === rev.join()) {
    return 'Es capicua';
  } else {
    return 'No es capicua';
  };
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  //  var modi = [];
  //var arra = cadena.split('');
  //for ( i = 0; i < arra.length; i++) {
    //modi.push(arra[i]);
    //if (arra[i] === 'a' || arra[i] === 'b' || arra[i] === 'c') {
     // modi.pop();
  //  };
  //};
  //return modi.join('');
//}
  var modi = [];
  var arra = cadena.split('');
  for ( i = 0; i < arra.length; i++) {    
    if (arra[i] !== 'a' && arra[i] !== 'b' && arra[i] !== 'c') {
      modi.push(arra[i]);
    };
  };
  return modi.join('');
}
//var modi = '';
//for (i = 0; i < cadena.length; i++) {
  //if (cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i] !== 'c'){
    // modi = modi + cadena[i];
    //};
  //};
  //return modi;
//}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort((a, b) => a.length - b.length);
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arreglo3 = [];
  for (i = 0; i < arreglo1.length; i++) {
    if (arreglo2.includes(arreglo1[i])){
      arreglo3.push(arreglo1[i]);
    };
  };
  return arreglo3;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

