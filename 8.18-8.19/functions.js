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


// 11. Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 

function findSecond(array){
    array = array.sort();
    return array[1]+","+array[array.length-2];
}
let q11array = [1,2,3,4,5];
let q11 = findSecond(q11array);
console.log(q11);


// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
// the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
// number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
// half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1
// + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 +
// 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the
// perfect numbers 496 and 8128.

function perfectNum(number){
    if (number <=0){
        return false;
    }
    sum = 1
    for(let i = 2; i < number; i++){
        if(number % i==0){
            sum = sum + i;
        }
        if(sum==number){
            return true;
        }
    }
    return false;
}

let q12 = perfectNum(28);
let q12test2 = perfectNum(7);
console.log(q12,q12test2);


// 13. Write a JavaScript function to compute the factors of a positive integer. 

function computeFactors(number){
    let factors = [];
    for(let i=1;i<=number; i++){
        if(number %i ==0){
            if(!factors.includes(i)){
                factors.push(i);
            }
            if(!factors.includes(number/i)){
                factors.push(number/i);
            }
        }
    }
    return factors.sort(function(a,b){return a-b});
}
let q13 = computeFactors(12);
console.log(q13);

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1

function amountTocoins(amount, coins){
    let result = [];
    coins= coins.sort(function(a,b){return b-a});
    let i =0;
    while(amount>0 && i<coins.length){
        if(amount >= coins[i]){
            amount = amount - coins[i];
            result.push(coins[i]);
        }
        else{
            i++;
        }
    }
    return result.join(', ');
}

let q14 = amountTocoins(46,[25,5,10,2,1]);
console.log(q14);


// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
// bases. Accept b and n from the user and display the result. 

function exponent(b,n){
    return b**n;
}

// let q15b = window.prompt('Enter the base for question 15 (to compute the value of b^n):');
// let q15n = window.prompt('Enter the exponent:');
// let q15 = exponent(q15b,q15n);
// console.log(q15);


// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

function extractUnique(string){
    let output = new Set();
    for(let i=0;i<string.length; i++){
        output.add(string[i]);
    }
    let result = Array.from(output).join("");
    return result;
}
let q16 = extractUnique("thequickbrownfoxjumpsoverthelazydog");
console.log(q16);

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

function numOfOccurrences(string){
    let output = {};
    for(let i=0;i<string.length; i++){
        if(string[i].toLowerCase().match(/[a-z]/)){
            if(Object.keys(output).includes(string[i].toLowerCase())){
            output[string[i].toLowerCase()] +=1;
            }
            else{
            output[string[i].toLowerCase()]=1;
            }
        }
    }
    return output;
}

let q17 = numOfOccurrences("I have a dog");
console.log(q17);


// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
// the desired value.

function binarySearch(array, target){
    array = array.sort(function(a,b){return a-b});

    if(array.length<=0){
        return false;
    }
    let mid = Math.floor(array.length / 2);
    if(array[mid] == target){
        return true;
    }
    
    if(array[mid] > target){
        array = array.slice(mid);
        return binarySearch(array, target);
    }
    else{
        array = array.slice(0,mid);
        return binarySearch(array, target);
    }
}
let q18array = [1,3,5,6,7,8,9];
let q18test1 = binarySearch(q18array, 7);
let q18test2 = binarySearch(q18array, 6);
console.log(q18test1, q18test2);


// 19. Write a JavaScript function that returns array elements larger than a number. 

function largerElements(array, target){
    let result = [];
    for(let i=0; i<=array.length; i++){
        if(array[i] > target){
            result.push(array[i]);
        }
    }
    return result;
}
let q19 = largerElements([1,2,3,4,5,6],4);
console.log(q19);

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample   character   list:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function generateID(length){
    let result ="";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i=0; i<length; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
let q20 = generateID(6);
console.log(q20);

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]

function getSubsets(array, length){
    var result_set = [],   
        result; 
    for(var x = 0; x < Math.pow(2, array.length); x++)  
    {  
        result = [];  
        i = array.length - 1;   
        do 
        { 
            if( (x & (1 << i)) !== 0)  
            {  
                result.push(array[i]);  
            }  
        }  while(i--);  
  
        if( result.length == length)  
        {  
            result_set.push(result);  
        }
    }
    return result_set;  
}
let q21 = getSubsets([1,2,3],2);
console.log(q21);


// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
// will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 

function countOccurrences(string,target){
    let count = 0;
    for(str of string){
        if(target==str){
            count++;
        }
    }
    return count;
}
let q22 = countOccurrences('microsoft.com', 'o')
console.log(q22);



// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 

function findNonrepeatFirst(string){
    let occurrences = numOfOccurrences(string);
    for(occur in occurrences){
        if (occurrences[occur]==1){
            return occur;
        }
    }
}
let q23 = findNonrepeatFirst('abacddbec');
console.log(q23);


// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
// sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
// each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]


function bubbleSort(array){
    for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length-1; j++){
            if(array[j] < array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }

    return array;
}
let q24 = bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]);
console.log(q24);



// 25. Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

function longestCountryName(array){
    let result = array[0];
    for (country of array){
        if (country.length >= result.length){
            result = country;
        }
    }
    return result;
}
let q25= longestCountryName(["Australia", "Germany", "United States of America"]);
console.log(q25);

// 26. Write a JavaScript function to find longest substring in a given a string without repeating
// characters. 

function longestNonRepeating(string){
    let characters=string.split("");
    let str = "";
    let maxSubstring = "";
    for(j=0;j<characters.length;j++) {
        for(i=j;i<characters.length;i++) {
            if(str.includes(characters[i]))
                break;
            else
            str+=characters[i];
         }
         if(maxSubstring.length<str.length)
             maxSubstring = str;
         str="";
    }
    return maxSubstring;
}

let q26 = longestNonRepeating("apple");
console.log(q26);



// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
// symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
// given string that is also a palindrome. For example, the longest palindromic substring of
// "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
// example, in the string "abracadabra", there is no palindromic substring with length greater than
// three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all
// substrings that are themselves palindromes and cannot be extended to larger palindromic
// substrings) rather than returning only one substring or returning the maximum length of a
// palindromic substring.

function longestPalindrome(string){
    let str = "";
    let maxPalindrome = "";
    for(let j=0;j<string.length;j++) {
        for(let i=string.length; i >=j ;i--) {
            str = string.substring(j,i);
            if(palindrome(str) && str.length>maxPalindrome.length){
                maxPalindrome = str;
            }
         }
    }
    return maxPalindrome;
}
let q27 = longestPalindrome("bananas");
console.log(q27);



// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function functionPasser(funt, numA, numB){
    return funt(numA,numB);
}
let q28 = functionPasser(function(a,b){return a+b}, 3,5);
console.log(q28);


// 29. Write a JavaScript function to get the function name. 

function getName(f){
    return f.name;
}
let q29 = function(){};
console.log(getName(q29));

