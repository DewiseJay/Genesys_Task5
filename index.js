/* TASK1
create a function that will be able to convert figures from fahrenheit to celcius
*/

//  Answer: fahrenheitToCelcius(260)
let tempFahrenheitValue = 500;
let tempCelcius = fahrenheitToCelcius(tempFahrenheitValue);

function fahrenheitToCelcius(fahrenheit) {
    let celcius = ((fahrenheit - 32) * 5 / 9);
    return celcius;
}
console.log('question 1:')

console.log(tempCelcius);


// ...........................................................................................................


/* TASK2
create a function that will calculate the average of numbers in an array
*/

// Answer: function(5.5)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
arr.forEach(function (num) {
    sum += num;
}); 

average = sum / arr.length;
console.log('question 2:')
console.log(average);
    

// ...........................................................................................................


// Task3

/* Create a function that checks if a number n is divisible by two numbers x and y. All inputs are positive, non-zero digits*/


function ifIsDivisible(n, x, y) {
    return n % x == 0 && n % y == 0;
}
console.log('question 3:')
console.log("Yes is Divisible", ifIsDivisible(15, 3, 5));
console.log("Yes is Divisible", ifIsDivisible(20, 4, 5));
console.log("Not Divisible", ifIsDivisible(35, 3, 5));



// ...........................................................................................................



   /* TASK4
create a function that will output the first 100 prime numbers
*/

console.log('question 4:')
let count = 0;
let E, J;
for (E = 2; E <= 100; E++){
    for (J = 1; J <= E; J++){
        if (E % J == 0)
        count++;
    }
    if (count == 2)
    console.log(E);
    count = 0;
}


// ...........................................................................................................


/*TASK5
Create a function that will return a boolean specifying if a number is a prime number.
*/

// Answer: Is 50 a prime number... letCheckPrimeNum("FALSE")
console.log('question 5:')
function letCheckPrimeNum(anyNum) {
    if (anyNum === 0 || anyNum === 1) {
            return false;
    }
    else if(anyNum === 2) {
            return true;
    }
    else {
        for (let i = 2; i < anyNum; i++) {
        if (anyNum % i === 0) {
            return false;
            
        }
    }
            return true;
    
    }
}

console.log(letCheckPrimeNum(50));


// ...........................................................................................................


/* TASK6
Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.
*/

let arrNum = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const positiveOnly = (arrNum) => arrNum.filter(num => num > 0);

let arrPostive = positiveOnly(arrNum);
console.log('question 6:')
console.log(arrPostive);



// ...........................................................................................................


 /* TASK7
Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".
*/

console.log('question 7:')
function multiples() {
    for (B = 1; B <= 100; B++){
        if ((B % 3) === 0) {
            console.log("Fizz ");
        }
        else if ((B % 5) === 0) {
            console.log(" Buzz ");
        }
        else ((B % 3 && 5) === 0)
        {
        console.log(" FizzBuzz ");
    }
} 
}

multiples();
    

// ...........................................................................................................


/*TASK8
The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria; 
1. It must start with a hash symbol, #.
2. Ignore all spaces in the input.
3. All words must have their first letter capitalized.
4. If the final result is going to be longer than 140 characters, it should return false.
5. If the input or result is an empty string, it should return false.
*/

console.log('question 8:')

let yourHashTag = prompt("Enter your hashtag: ");

if (yourHashTag === "") {
    prompt("please this field must not be empty");
}

if (yourHashTag.length > 140) {
    prompt("Your text should not exceed 140 long");
    
}

const firstLetterCapitalize = yourHashTag.split(' ').map(yourHashTag => yourHashTag.charAt(0).toUpperCase() + yourHashTag.slice(1)).join('');

const startWithHashtag = `#${firstLetterCapitalize}`;
prompt("Your Hashtag is " + startWithHashtag);
console.log(startWithHashtag);