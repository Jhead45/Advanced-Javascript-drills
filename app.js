// hoisting and functions
name = 'Justin';
var name;
console.log(name);

setName();
function setName() {
    var name='Covalence';
    console.log(name);
};

console.log('some text');
let avg = findAvg(2, 2);
console.log('some text', avg);
function findAvg(a, b) {
    console.log('some text');
    var answer = ( a + b) / 2;
    return answer;
};
//scoping
let fruits = ['grapes', 'apples', 'oranges'];


function printFruit() {
    let favFruit = fruits[1];
    console.log(fruits[0]);
    printFavFruit();
function printFavFruit() {
    console.log(favFruit);
    
}
};
printFruit();

let leastFav = fruits[2];
console.log(leastFav);


sayHello();
function sayHello() {
    console.log('Hello, Justin!');
}

function greetings() {
    alert('Hello!!!');
}
greetings();