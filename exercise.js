
//1) Write a function that counts the number of characters in a string, eg. myFunction("Hello World") will return 10.

function myFunction(text){
    return console.log(text.length)
}

myFunction('Hello World');

//2) Program a function that returns the text trimmed according to the number of characters indicated, eg. myFunction("Hello World", 4) will return "Hello".

function trimmed(text, length){
    return console.log(text.slice(0, length))
}

trimmed('Hello World', 5);

//3) Program a function that, given a String, returns an Array of texts separated by a certain character, eg. myFunction('hello how are you', ' ') will return ['hello', 'what', 'how'].

function separated(text){
    return console.log(text.split(' '))
}

separated('hello how are you');

//4) Program a function that repeats a text X times, eg. myFunction('Hello World', 3) will return Hello World Hello World Hello World.

function repeat(text, times){
    for(let i = 0; i < times; i++){
        console.log(text)
    }
}

    /*  
    const repeat = (text, numbers ) => 
      console.log(text.repeat(numbers));  
    repeat('Hello world', 3) 
    */


repeat('Hello world', 3);

//5) Write a function that reverses the words of a text string, eg. myFunction("Hello World") will return "odnuM aloH".

const inverted = (text) => console.log(text.split("").reverse().join(""));

inverted("Hello World");

//6)Program a function to count the number of times a word is repeated in a long text, eg. myFunction("hello world bye world", "world") will return 2.

const worldRepeated = ( text, world ) => {
    var counter = 0;
    let i = 0;

    while(i !== -1){
        i = text.indexOf(world, i);

        if(i !== -1){
            i++;
            counter++;
        }
    }
    return console.log(`The world: ${world} is repeated ${counter} times`);
}

worldRepeated('Hello world, bye world', 'world');

//7) Program a function that checks if a given word or phrase is a palindrome (which reads the same in one sense as in another), eg. myfunction("Rooms") will return true.

const palindrome = (world) => {
    world.toLowerCase()
    let reverse = world.split('').reverse().join('')
    return (world === reverse) ? console.log(true) : console.log(false)
}

palindrome('salas'); //true

//8)Write a function that removes a certain pattern of characters from a given text, eg. myFunction("xyz1, xyz2, xyz3, xyz4 and xyz5", "xyz") will return "1, 2, 3, 4 and 5.

const deletePattern = (text, pattern) => console.log(text.replace(new RegExp(pattern, "ig"), "")); // i = It doesn't matter if it's uppercase or lowercase. / g = Don't stop at the first match

deletePattern("xyz1, xyz2, xyz3, xyz4 and xyz5", "xyz")


//9) Program a function that gets a random number between 501 and 600.

const randomNumber = () => console.log(Math.round((Math.random()* 100)+ 500));

randomNumber();

//10) Program a function that receives a number and evaluates whether or not it is palindromic (which reads the same one way or another), eg. myFunction(2002) will return true.

const numberPalindrome = (number = 0) => {
    number = number.toString();
    let isPalindrome = number.split('').reverse().join('');

    return ((number) === isPalindrome) ? console.log(true): console.log(false)
}

numberPalindrome('2002');

//11) Program a function that calculates the factorial of a number (The factorial of a positive integer n, is defined as the product of all positive integers from 1 to n), eg. myFunction(5) will return 120.

const factorial = (number) => {
    let factorial = 1;

    for(let i = number; i > 1; i--){
        factorial *= i;
    }
    return factorial;
}

console.log(factorial(5));

//12) Program a function that determines if a number is prime (the one that is only divisible by itself and 1) or not, eg. myFunction(7) will return true.

const primeNumber = (number = undefined) => {
    let divisible = false;

    for(let i = 2; i < number; i++){
        if((number % i) === 0){
            divisible = true;
            break;
        }
    }
    return (divisible) ? console.log('Is not prime') : console.log('Is prime');
}

primeNumber(13);

//13) Program a function that determines if a number is even or odd, eg. myFunction(29) will return Odd.

const evenOrOdd = (number) => {
    return ((number % 2) === 0) ? console.log('Even number') :  console.log('Odd number');
}

evenOrOdd(10); // Even number

//14) Program a function to convert degrees Celsius to Fahrenheit and vice versa, eg. myFunction(0,"C") will return 32°F.

const degrees = (number) => {
    console.log(( number * 9 / 5) + 32)
}

degrees(0, + 'º'); //32

//15) Program a function to convert binary base number to decimal and vice versa. For example, myFunction(100,2) will return 4 base 10.

const binaryToDecinal = (number, type) => {
    if(typeof number !== "number") return console.log('Is not a number')

    if( type === 2 ){
        return console.log(`Number ${number} type ${type} = ${parseInt(number, type)} base 10`)
    }
}

binaryToDecinal(100,2);

//16) Program a function that returns the final amount after applying a discount to a given amount, miFunction(1000, 2) will return 800

const descuento = (number, percent) => {

    const total = percent*number/100;

    const finalResult = number - total ;

    console.log(`${finalResult}`)
}

descuento(1000,20);

// 17) Create an array with 100 positions filled with the false boolean

const d = Array(100).fill(false)
console.log(d)

// 18) Find the index of an element (fresa) inside the Object

const frutas = [
    { nombre: 'naranja', color: 'naranja' }, // 0
    { nombre: 'limon', color: 'amarillo' }, // 1
    { nombre: 'fresa', color: 'rojo' }, // 2
  ];
  
  const indice = frutas.findIndex((elemento, indice) => {
    if (elemento.nombre === 'fresa') {
      return true;
    }
  });
  
  console.log(indice); // index 2

// 19) Adding new elements to an array

var array = ['a','b','c'] // a, b, c

const elements = (array) => {
    array.pop() 
    console.log(array)// a, b (-)
    array.push('d')
    console.log(array) //a, b, (d)
    array.shift()
    console.log(array) // (-) b, c
    array.unshift('z')
    console.log(array) // (z), a, b, c
}

elements(array)

// 20) Methods in objects:

const  persona = {
    nombre: 'Soraya',
    edad: 25,
    hobbie: 'comer',
    saludar(){
      console.log(`Hola `)
    },
    presentarse(){
      console.log(`Mi nombre es ${this.nombre}`)
    }
  }
  
persona.presentarse() // "Mi nombre es Soraya"

// 21) Program a function that returns an array of numbers given a numeric array, e.g. my_function([1, 4, 5]) will return [1, 16, 25].

const elevados = (number) => {
    
    const newNumber = number.map(e => e * e);
    return console.log(`Arreglo original ${number}. Arreglo elevado al cuadrado: ${newNumber}`)
}

elevados([1, 4, 5])

// 22) Program a function that given an array returns the highest and lowest number in the array, e.g. myFunction([1, 4, 5, 99, -60]) will return [99, -60].

const minMax = (number) => {
    return console.log(`Array original: ${number}. The highest number is ${Math.max(...number)} and the lower is ${Math.min(...number)} `)
}

minMax([1, 4, 5, 99, -60])

// 23) Program a function that given an array of numbers returns an object with 2 arrays in the first one it stores the even numbers and in the second one the odd numbers, e.g. myFunction([1,2,3,4,5,6,7,8,9,0]) will return {even: [2,4,6,8,0], odd: [1,3,5,7,9]}.

const separateOddEven = (number) => {
    return console.log({
        even: number.filter(num => num % 2 === 0),
        odd : number.filter(num => num % 2 === 1)
    })
}

separateOddEven([1,2,3,4,5,6,7,8,9,0])

//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const arrToObject = (number) => {
    return console.log({
        number,
        asc: number.map(num => num).sort(),
        desc: number.map(num => num).sort().reverse()
    })
}

arrToObject([7, 5,7,8,6])

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const arrDuplicates = ["x", 10, "x", 2, "10", 10, true, true];

const newArrWithoutDuplicates = [...new Set(arrDuplicates)];

console.log(newArrWithoutDuplicates);


//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

let values = [9,8,7,6,5,4,3,2,1,0];

let sum = values.reduce((previous, current) => current += previous);

let avg = sum / values.length;

console.log(avg)


/* 27) Given an unordered array of integers named number returns the smallest positive missing integer.*/

 nums = [-3,-7,8,9,-5,1,2,3,5,6]

 function smallestMissingPositive(nums){
 if(nums.length === 0) return 1

 const onlyPositives = nums.filter(num => num > 0);

 const set = new Set(onlyPositives)

 for(let i = 1; i <= set.size +1; i++){ if (!  set.has(i)) return console.log( i )}
 }

 smallestMissingPositive(nums)


// 28) Generate a square using this simbol '+'.

function square(n){
 return Array(n).fill('+'.repeat(n)).join('\n');
}
console.log(square(4));

// 29) Array methods:
//returns the array multiplied by 2
const num1 = [1,2,3,4]
console.log(num.map(n => n*2)) //[2,4,6,8]

//returns the array filtering the string
const num2 = [1,'hola', 'si']
console.log(num.filter(n => typeof n == "string" ))// ['hola','si']

//returns the index of a value in the array
const num3 = [1,'hola', 'si']
console.log(num.findIndex(n => n === 'si' )) // 2

//fill the array with true
const num4 = [ , , ]
console.log(num4.fill('true')) // [true, true, true]

//in this array, is everything true?
const num5 = [true, true, false, true]; 
console.log(num5.every(n => n === true)); //false

//in this array, is there some error?
const num6 = [true, true, false, true]; 
console.log(num5.some(n => n === false)); //true 


/* 30) Players take turns to count incrementally, 
replacing any number divisible by three with the word 
"fizz", and any number divisible by five with the word
"buzz", and any number divisible by
both 3 and 5 with the word "fizzbuzz".*/

function fizzbuzz(max){
  for(let i = 1; i <= max; i++ ){
    
    if(i % 3 == 0){ console.log('fizz')} 
    
    else if (i % 5 == 0){ console.log('buzz')}
    
    else if (i % 3 == 0 && i % 5 == 0){console.log('fizzbuzz')}

    else console.log(i)
  }
}

fizzbuzz(100) 

// 31) Find out if there is any number in the array and in what position it is.

const anyNumberAndPosition = ['a','b', 10,'c','c'];
console.log(arr.some(n => typeof n === 'number'))
console.log(arr.findIndex(n => typeof n === 'number'))

// 32) Iterate an object and display its content:

const home = {
  location: 'Spain',
  street: 'Plaza Libertad',
  price: 170.000,
  rooms: 7
}

Object.entries(home).forEach( ([key,value]) => {
  console.log(`${key.toUpperCase()}: ${value}`);
})

/*  
    "LOCATION: Spain"
    "STREET: Plaza Libertad"
    "PRICE: 170"
    "ROOMS: 7"
*/

// 33) Remove specific data from an array

const films = [ 
  {pelicula: 'La vida es Bella', year: 1997},
  {pelicula: 'Zombieland', year: 2012},
  {pelicula: 'Volver', year: 1965}]

arr.splice(1,1) // in position 1 = Zombieland, 2012
//toSpliced sirve para lo mismo pero creando un nuevo array en vez de modificando el existente
console.log(arr) //   {pelicula: 'La vida es Bella', year: 1997}, {pelicula: 'Volver', year: 1965}

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




