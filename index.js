/* TASK1
create a function that will be able to convert figures from fahrenheit to celcius
*/

let fahrenheitToCelcius = (tempFahrenheitValue)  => {
    return (tempFahrenheitValue - 32) * (5/9)
}
// TASK1: Test cases
console.log(fahrenheitToCelcius(50) + "\u00B0C") // 10°C

// ...........................................................................................................


/* TASK2
create a function that will calculate the average of numbers in an array
*/

let arr = (arrValue) => {
    let sum = 0;
    for (let i = 0; i < arrValue.length; i++){
        sum += arrValue[i];
    }
    return (sum / arrValue.length);
};
// TASK2: Test cases
console.log(arr([1,2,3,4,5])); //3
    

// ...........................................................................................................


// Task3

/* Create a function that checks if a number n is divisible by two numbers x and y. All inputs are positive, non-zero digits*/


function ifIsDivisible(n, x, y) {
    return n % x == 0 && n % y == 0;
}
// TASK3: Test cases
console.log("Yes is Divisible", ifIsDivisible(15, 3, 5)); //True
console.log("Not Divisible", ifIsDivisible(35, 3, 5)); //False

// ...........................................................................................................


   /* TASK4
create a function that will output the first 100 prime numbers
*/

let count = 0;
let E, J;
for (E = 2; E <= 100; E++){
    for (J = 1; J <= E; J++){
        if (E % J == 0)
        count++;
    }
    if (count == 2)
        //Task4: Test Case
    console.log(E); // prime numbers from 1 to 100
    count = 0;
}


// ...........................................................................................................


/*TASK5
Create a function that will return a boolean specifying if a number is a prime number.
*/

// Answer: Is 50 a prime number... letCheckPrimeNum("FALSE")

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
// TASK5: Test cases
console.log(letCheckPrimeNum(50)); //false


// ...........................................................................................................


/* TASK6
Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.
*/

let arrNum = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]

const positiveOnly = (arrNum) => arrNum.filter(num => num > 0);

let arrPostive = positiveOnly(arrNum);

// TASK6: Test cases
console.log(arrPostive); // [1,2,3,4,5]



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


let yourHashTag = parseFloat("Enter your hashtag: ");

if (yourHashTag === "") {
    console.log("please this field must not be empty");
}

if (yourHashTag.length > 140) {
    console.log("Your text should not exceed 140 long");
    
}

const firstLetterCapitalize = yourHashTag.split(' ').map(yourHashTag => yourHashTag.charAt(0).toUpperCase() + yourHashTag.slice(1)).join('');

const startWithHashtag = `#${firstLetterCapitalize}`;
console.log("Your Hashtag is " + startWithHashtag);

 //Task8: Test case
console.log(startWithHashtag); //