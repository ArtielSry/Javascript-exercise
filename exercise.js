
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

worldRepeated('Hello world, bye world', 'world')

//7) Program a function that checks if a given word or phrase is a palindrome (which reads the same in one sense as in another), eg. myfunction("Rooms") will return true.

const palindrome = (world) => {
    world.toLowerCase()
    
    let reverse = world.split('').reverse().join('')

    return (world === reverse ? true : false)
}

console.log('rooms') //true

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

numberPalindrome('2002')

//11) Program a function that calculates the factorial of a number (The factorial of a positive integer n, is defined as the product of all positive integers from 1 to n), eg. myFunction(5) will return 120.

const factorial = (number) => {
    let factorial = 1;

    for(let i = number; i > 1; i--){
        factorial *= i;
    }
    return factorial;
}

console.log(factorial(5))

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

primeNumber(13)

//13) Program a function that determines if a number is even or odd, eg. myFunction(29) will return Odd.

const evenOrOdd = (number) => {
    return ((number % 2) === 0) ? console.log('Even number') :  console.log('Odd number');
}

evenOrOdd(10); // Even number

//14) Program a function to convert degrees Celsius to Fahrenheit and vice versa, eg. myFunction(0,"C") will return 32°F.

const degrees = (number) => {
    console.log(( number * 9 / 5) + 32)
}

degrees(0, + 'º') //32