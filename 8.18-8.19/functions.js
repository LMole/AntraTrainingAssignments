// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223 

function reverseNumber(x){
    let str = ""+x;
    let reverse = +(str.split("").reverse().join(""));
    return reverse;
}
let q1 = reverseNumber(32243);
console.log(q1);

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run.

function palindrome(string) {
    let lowerStr = string.toLowerCase(); //check edge cases
    let reverse = lowerStr.split("").reverse().join("");
    if (lowerStr === reverse){
        return true;
    }
    return false;
}

let q2test1 = palindrome("Madam");
let q2test2 = palindrome("run");
console.log(q2test1);
console.log(q2test2);


// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g 

function allCombinations(string){
    let result = [];
    for(let i = 0; i <= string.length; i++){
        for(let j = i+1; j <= string.length; j++){
            result.push(string.substring(i,j));
        }
    }
    return result.join(", ");
}

let q3 = allCombinations("dog");
console.log(q3);


// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function alphabeticalOrder(string){
    string = string.split("");
    let sortedStr = string.sort();
    return sortedStr.join("");
}

let q4 = alphabeticalOrder("webmaster");
console.log(q4);


// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '

function capitalize(string){
    let words = string.split(" ");

    for(let i = 0; i < words.length; i++){
        words[i] = (words[i].charAt(0).toUpperCase())+ words[i].slice(1);
    }
    return words.join(" ");
}
let q5 = capitalize("the quick brown fox");
console.log(q5);

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'

function findLongestWord(string){
    let words = string.split(" ");

    let longest = words[0];
    for(let i = 1; i < words.length; i++){
        if (words[i].length >= longest.length){
            longest = words[i];
        }
    }
    return longest;
}

let q6 = findLongestWord("Web Development Tutorial");
console.log(q6);


// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
// vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5

function countVowels(string){
    let vowelsArr = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let i = 0; i < string.length; i++){
        if(vowelsArr.includes(string.charAt(i))){
            count += 1;
        }
    }
    return count;
}

let q7 = countVowels("The quick brown fox");
console.log(q7);


// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.

function isPrime(number){
    if(number <=1){
        return false;
    }

    for(let i =2; i < number; i++){
        if(number %i ==0)
        {
            return false;
        }
    }
    return true;
}

let q8test1 = isPrime(8);
let q8test2 = isPrime(5);

console.log(q8test1, q8test2);


// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string,
// and undefined.

function checkType(arg){
    return typeof(arg);
}
let q9test1 = checkType("Hello");
let q9test2 = checkType(false);
let q9test3 = checkType(123);
let q9test4 = checkType(undefined);
let arg = {
    name: "Bob"
}
let q9test5 = checkType(arg);
let arg2 = () =>{
    return 2+2
}
let q9test6 = checkType(arg2);


console.log(q9test1,q9test2,q9test3,q9test4,q9test5,q9test6);

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 

function identityMatrix(n){
    let mat = []
    for(let i=0; i<n; i++){
        mat[i] = []; //creates an 2d array
        for(let j=0; j<n; j++){
            if (i !== j){
                mat[i][j] =0;
            }
            else{
                mat[i][j] =1;
            }
        }
    }
    return mat;
}

let q10 = identityMatrix(5);
console.log(q10);



