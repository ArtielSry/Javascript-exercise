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


// Operador de Cortocircuito: muestra el primer valor que no es falso
let a
let b = null;
let c = undefined;
let d = 4;
let e = 'five';

let f = a || b || c || d || e;

console.log(f); // 4


// Asynchrony: que no se resuelve en el presente inmediato sino en un futuro
console.log('Asynchrony')
console.log('Start')
function two(){
  console.log('Inside two')
  three();
}
function three(){
  console.log('Three')
}
function one(){
  console.log('Inside one')
  two();
}
one();
console.log('End')

/*
      "Asynchrony"
      "Start"
      "Inside one"
      "Inside two"
      "Three"
      "End"
*/


// CALLBACK: funcion que se ejecuta despues de que otra lo haga. Callback HELL.
/*Supongamos que nos encontramos hablando por teléfono. Al estar hablando nos surge una situación por resolver de manera inmediata.
Ponemos la llamada en espera, realizamos lo que tenemos que hacer y cuando terminamos, volvemos a la llamada que dejamos en espera.*/

// PROMISES: .then -> reject() or resolve() // .catch() -> para reemplazar callback.
function getUser(userId) {
  if(typeof userId !== 'string') return Promise.reject();
 const userData = fetch(`https://api.com/api/user/${userId}`)
   .then(response => response.json())
   .then(data => console.log(data.name))
   .catch(error => console.log(error))
   .finally(() => /*{ aviso de fim de carregamento }*/)
}


// Async: funcion asincrona 
// Await: vas a esperar al resultado de una funcion antes de pasar a la siguiente linea de codigo
const apiFetch = async(page) => {
    let url="https://rickandmortyapi.com/api/character/?page="+page; // url + page
    const api = await fetch(url);  // se usa await porque vamos a esperar a recibir la pagina antes de pintar los datos
  const data = await api.json();  // 
    console.log(data) // result in console
}


// Formas de crear elementos o nodos en javascript:
const newDiv = document.createElement('div');
const newTitle = document.createTextNode('New title');
const comment = document.createComment('This is a comment');

//Copiar un elemento o nodo existente en el HTML:
/* 
<!-- beforebegin -->
<section id='section'>
    <!-- afterbegin -->
    <article>
      <h3>title</h3>
      <p>lorem ipsum dolor sit amet...</p>
    </article>
    <!-- beforeend -->
    -- AQUI VA EL NUEVO ELEMENTO --
</section>
<!-- afterend -->
*/
const article = document.querySelector('article'); //cogiendo un elemento del DOM

const article2 = article.cloneNode(false) //con false: hace copia en memoria del elemento (solo esta en memoria porque todavia no lo he insertado)
const article3 = article.cloneNode(true) //con true: hace copia en memoria EN PROFUNDIDAD del elemento, asi que copia tambien los elementos hijos.

//Añadiendo el nodo copiado a mi HTML:
const section = document.getElementById('section'); //el padre, donde quiero añadirlo
section.appendChild(article3); //appendChild para añadir como hijo a un nodo-elemento padre;

//Puedo insertarlo en varias formas: al principio, al final, en el segundo puesto...
section.insertAdjacentElement('beforebegin', article2) //posicion,elemento
section.insertAdjacentElement('beforeend', article2) //posicion,elemento
section.insertAdjacentElement('afterbegin', article2) //posicion,elemento
section.insertAdjacentElement('afterend', article2) //posicion,elemento


//Metodos para añadir clases, eliminarlas y modificarlas:
const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const cube = document.getElementById('cube');
//poner y quitar una clase con un click
btn.addEventListener('click', ()=> 
  cube.classList.toggle('blue')
)
//solo añade la clase
btn2.addEventListener('click', ()=> 
   cube.classList.add('adding')
)
//solo elimina la clase
btn3.addEventListener('click', ()=> 
   cube.classList.remove('adding')
)


//DOM loaded
document.addEventListener('DOMContentLoaded', ()=> {
  console.log('Loaded')
})


/* BUBBLING: cuando un elemento hijo tiene un evento y su elemento padre tambien 
tiene un evento, al hacer click en el evento hijo tambien va a ocurrir el evento de su padre,
esto se conoce como bubbling.
Para evitarlo: */
const section= document.getElementById('section') // parent
const title = document.getElementById('title') // child

section.addEventListener('click', (event)=> {
  console.log('Esto es la section')
})

title.addEventListener('click', ()=> {
  event.stopPropagation(); // con este evento evito que el section padre haga su evento.
  console.log('Esto es el titulo')
})


//
