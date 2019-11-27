console.log("connected");

//push - use push to add to the end of an array
var colors = ["red", "orange", "yellow"];
colors.push("green");



//pop - use pop to remove the last item in an array
var colors = ["red", "orange", "yellow"];
colors.pop(); //["red", "orange"]
    //pop() returns the removed element
var col = colors.pop(); //orange



//unshift - use unshift to add to the front of an array
var colors = ["red", "orange", "yellow"];
colors.push("infrared");
    //["infrared", "red", "orange", "yellow"];



//shift - use shift to remove the first item in an array
var colors = ["red", "orange", "yellow"];
colors.push();
    //["orange", "yellow"];

    //shift() also returns the removed element
var col = colors.shift(); //orange



//indexOf - use indexOf to find the index of an item in an array
var friends = ["charlie", "liz", "David", "Mattias", "Liz"];

//returns the first index at which a given element can be found
friends.indexOf("David"); //2
friends.indexOf("Liz"); //1, not 4 (...)

//returns -1 if the element is not present
friends.indexOf("Hagrid"); //-1



//slice - use slice() to copy parts of an array
var fruits = ['banana', 'orange', 'lemon', 'apple', 'mango'];
//use slice to copy the 2nd and 3rd fruits
//specify index where the new array starts(1) and ends(3)
var citrus = fruits.slice(1, 3);

//this does not alter the original fruits array
//citrus contains ['orange', 'lemon']
//fruits contains ['banana', 'orange', 'lemon', 'apple', 'mango']

//you can also use slice() to copy an entire array
var nums =[1, 2, 3];
var otherNums = nums.slice();
//both arrays are [1, 2, 3]



//splice - use splice to delete item from array



//ARRAYS EXERCISES
// Exercise 1
var numbers = [22, 67, 33, 96, 88];

console.log(numbers[numbers.length])
    //undefined -- there is no item assigned to numbers[5]


// Exercise 2
var friendGroups = [
    ["Harry", "Ron", "Hermione"],
    ["Malfroy", "Crabbe", "Goyle"],
    ["Mooney", "Wormtail", "Prongs"],
];

console.log(friendGroups[2][0]);
    //"Mooney"



//ARRAY ITERATION
//for loop
var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}



//forEach()
var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(color){
    console.log(color);
});



//while loop
var colors = ["red", "orange", "yellow", "green"];
var count = 0;

while(count < colors.length) {
    console.log(colors[count]);
    count++;
}



// ARRAY PROBLEM SET SOLUTIONS
//printReverse - write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order but doesnt reverse the array itself
function printReverse(arr) {
    for(var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

printReverse([3, 6, 2, 5]);



//isUniform - write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical
function isUniform(arr) {
    var first = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] !== first) {
            return false;
        }
    }
    return true;
}

isUniform([1, 1, 1]);
isUniform([1, 1, 2]);
isUniform([2, 1, 2]);



//sumArray - write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array
function sumArray(arr) {
    var total = 0;
    arr.forEach(function(element) {
        total += element;
    });
    return total;
}

sumArray([1, 2, 3]);
sumArray([10, 10, 10]);



//max - write a function max() that accepts an array of numbers and returns the maximum number in the array
function max(arr) {
    var max = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

max([1, 2, 3]);
max([10, 4, 10, 3]);
max([100, -5, 30]);



//forEach -- build your own forEach()
//arr.forEach(someFunction)
Array.prototype.myForEach = function(func) {
    for(var i = 0; i < this.length; i++) {
        func(this[i]);
    }
}

var friends = ["Charlie", "Dave", "Maddy", "Caitlin"];

friends.forEach(function(name){
    console.log("I love " + name);
});

