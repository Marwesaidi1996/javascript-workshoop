function reverseString(str) {
    // Convert the string to an array
    let arr = str.split('');
    // Reverse the array
    arr.reverse();
    // Join the array back into a string
    return arr.join('');
}
const originalString = "hello";
const reversedString = reverseString(originalString);
console.log(reversedString);

// function n2

function countCharacters(str) {

    let count = 0
    let i = 0
    while (str[i]) {
        count++
        i++
    }
    return count
}


// Example usage:
const exampleString = "hello";
const characterCount = countCharacters(exampleString);
console.log(characterCount);

//function n3

function capitalizeWords(sentence) {
    return sentence
        .split(' ')         // Split the sentence into an array of words
        .map(word =>         // Map each word to its capitalized version
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(' ');         // Join the array of capitalized words back into a sentenc
}

// Example usage:
const sentence = "hello world from openai";
const capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence);

//function n4

function MaxMin(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }

    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return { max, min };
}

const numbers = [3, 5, 1, 9, 2, 75, 99, 452, 45, 21, 44, 77, 66, 770];
const { max, min } = MaxMin(numbers);
console.log(`Max: ${max}`);
console.log(`Min: ${min}`);

//function n5

function sumArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
}
    return sum
}
const arr = [1,2,3,4,5,6,7,8,9];
const sum= sumArray(arr);
console.log("sumArray", sum);

//function n6.......

//function n7
function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
const number = 9;
const result = factorial(number);
console.log("factorial n ",result);


// function n8
function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    if (num <= 3) return true;  // 2 and 3 are prime numbers

    // Eliminate even numbers and multiples of 3
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Check for factors from 5 up to the square root of num
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

// Example usage:
const n = 20;
console.log(`${n} is prime: ${isPrime(n)}`);

// function filtre
function evennumber(arr) {
    return arr.filter(x => x>10)
}
const numbers1=[20,,2,4,88,99,55,66,2,5,4,7]
console.log(evennumber(numbers1))