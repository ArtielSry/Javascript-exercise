// 34) SetInterval - setTimeout. Hora en tiempo real:
let hour= setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000)

//stop setInterval:
clearTimeout(hour)
//Just one time:
setTimeout(() => {
  console.log('Happens just one time');
}, 1000)


// OBJECT DATE:
let date = new Date(); //nueva fecha
console.log(date);
console.log(date.getDate()); //dia del mes
console.log(date.getDay()); //dia de la semana  D L M X J V S -> 0 1 2 3 4 5 6
console.log(date.(getMonth()); //Mes
console.log(date.(getFullYear()); //Año 
console.log(date.(getHours()); //Hora 
console.log(date.(getMinutes()); //Minuto
console.log(date.(getSeconds()); //Segundos
console.log(date.toDateString()); // Dia, mes, numero del mes y año en String
console.log(date.toLocaleString()); // xx/xx/xxxx 00:00:00


// Array desestructuring: coger cada valor de un array:
const elements1 = [5, 2];
const [first1, last] = elements1;    // first = 5, last = 2

const elements2 = [5, 4, 3, 2];
const [first2, second2] = elements2;  // first = 5, second = 4, rest = discard

const elements3 = [5, 4, 3, 2];
const [first3,      , third] = elements3; // first = 5, (empty space), third = 3, rest = discard

const elements4 = [4];
const [first4, second4] = elements4;  // first = 4, second = undefined

// Objects desestructuring:
let home = {
    location: 'madrid',
    price: 200000,
    owner: 'me'
  }

let {location} = home;
console.log(`location: ${location}`);


// Spread operator (...) Make a copy of array or object
function sumNumbers(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sumNumbers(...numbers)); // 6


// 1) Having 2 different arrays, put them together in a third one:
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];

const arr3 = [...arr1,...arr2] ;  //operador Spread ...
console.log(arr3) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// 2) Prototypes: son un mecanismo mediante el cual 
// los objetos en JavaScript heredan características entre sí.

/*  Clases: modelo a seguir
    Objetos: es una instancia de una clase
        -Atributos: es una caracteristicas o propeidad
        del objeto(son variables dentro de un objeto)
        -Métodos: son las acciones que un objeto puede realizar
        (son funciones dentro de un objeto)
 */

// funcion constructora: la forma correcta es escribir los metodos fuera de esta, porque si no se van a repetir una y otra vez, realice la funcion o no.
function Animal (name, type){
    //atributos
    this.name = name;
    this.type = type;
}

//métodos fuera de la clase o funcion constructora
Animal.prototype.hello = function(){
     console.log(`I am ${this.name}`);}
  
const snoopy = new Animal('Snoopy','Macho');
snoopy.hello() // I am Snoopy


// 3) Fibonacci 
function fibonacci(num){
  const fib = [ 0, 1 ]
  
  for(let i = 2; 2 <= num; i++) {
      fib[i] = fib[i - 1] + fib[i - 2]
  }
  return console.log(fib[num]);
}
fibonacci(10)


// 4) Without knowing the values of an array, add them together and return the total.
// Usamos el parametro REST
function sum(...theArgs) { 
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return console.log(total) // 15 total
  // return total / theArgs.length; / average
}

console.log(sum(1, 2, 3, 4, 5));// 3 because total:15/3:average

