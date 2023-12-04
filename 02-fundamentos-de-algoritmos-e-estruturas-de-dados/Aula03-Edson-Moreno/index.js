// File with implementations among the third class.

// FIXME: MELHORAR A ESCRITA DOS COMENTÁRIOS, DEMONSTRAÇÕES DE CÓDIGOS.

// First part - presentation of language and variables/const.

console.log("Hello, world!");
console.log("Computer and algorithms fundamentals.");

{
    let f_name = "Joao";
    const ZIP = 5000067;
    var age = 20;
}


// TODO: Criar aqui um try catch para printar o erro da tentativa de print
// console.log(f_name); // Daria erro
// TODO: Criar aqui um try catch para printar o erro da tentativa de print
// console.log(ZIP); // Daria erro
console.log(age); // Não daria erro

// Second part - presentation of condition expressions and loops.

function parityAvaliation(maxLimit) {
    for (let i = 0; i < maxLimit; i++) {
        console.log(`Number ${i} is `);
        if (i % 2 == 0) console.log("even.");
        else console.log("odd.");
    }
}

parityAvaliation(10);

// Third part - Algorithm complexity

// Array
const myArr = [1, 2, 3, 4, 5]; // Creation first form
console.log(myArr.join('-')); // Add between elements of array the inserted character.

let mySecondArr = new Array(5); // Creating an instance of Array object allocating 5 positions for it.
mySecondArr[0] = 1;
mySecondArr[1] = 2;
mySecondArr[2] = 3;
mySecondArr[3] = 4;
mySecondArr[4] = 5;
console.log(mySecondArr);

let myThirdArr = new Array(1, 2, 3, 4, 5, "hello"); //Creating an instance of Array object assigning the values for it.
console.log(myThirdArr);

// TODO: Pratice an example creating a Fibonacci Sequence implementation

// Bidimensional Array - Matrix
var myMatrix = [];
myMatrix[0] = [1, 2, 3, 4, 5];
myMatrix[1] = [6, 7, 8, 9, 0];
console.log(myMatrix);

// TODO: Pratice an example of creating a Stack and a Queue in JS, after in C++

// TODO: Read all MDN links given by teacher.


console.log("----------------------------------------------------------------------------------------------------------------");

// Set
var mySet = new Set();

mySet.add(0);
mySet.add(1);
mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add(3);
mySet.add("textExample");
mySet.add({ key1: "value1", key2: "value2" });

// Maps
var myMap = new Map();

myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", 3);
myMap.set("key4", 4);
console.log(myMap);

for (const [key, value] of myMap) {
    console.log(`Key is: ${key} and value is: ${value}`);
}