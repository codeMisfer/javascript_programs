// 1. Write a JavaScript function that reverse a number. 
function reverseNumber(num) {
    let reversed = num.toString().split('').reverse().join('');
    return parseInt(reversed, 10);
}

let number = 32243;
console.log(reverseNumber(number)); // Output: 34223

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
function isPalindrome(str) {
    let cleaned = str.replace(/\s+/g, '').toLowerCase();
    let reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

console.log(isPalindrome("nurses run")); // Output: true
console.log(isPalindrome("hello")); // Output: false

// 3. Write a JavaScript function that generates all combinations of a string. 
function stringCombinations(str) {
    let combinations = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            combinations.push(str.slice(i, j));
        }
    }
    return combinations;
}

console.log(stringCombinations("dog")); // Output: ['d', 'do', 'dog', 'o', 'og', 'g']

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
function alphabetOrder(str) {
    return str.split('').sort().join('');
}

console.log(alphabetOrder("webmaster")); // Output: 'abeemrstw'

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWords("the quick brown fox")); // Output: 'The Quick Brown Fox'

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
function findLongestWord(str) {
    let words = str.split(' ');
    let longest = words.reduce((a, b) => a.length > b.length ? a : b);
    return longest;
}

console.log(findLongestWord("Web Development Tutorial")); // Output: 'Development'

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
function countVowels(str) {
    let matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(countVowels("The quick brown fox")); // Output: 5

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false

// 9. Write a JavaScript function which accepts an argument and returns the type. 
function getType(arg) {
    return typeof arg;
}

console.log(getType(42)); // Output: 'number'
console.log(getType("hello")); // Output: 'string'

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function identityMatrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push(i === j ? 1 : 0);
        }
        matrix.push(row);
    }
    return matrix;
}

console.log(identityMatrix(3)); 
// Output: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
function secondLowestGreatest(arr) {
    arr.sort((a, b) => a - b);
    return [arr[1], arr[arr.length - 2]];
}

console.log(secondLowestGreatest([1, 2, 3, 4, 5])); // Output: [2, 4]

// 12. Write a JavaScript function which says whether a number is perfect. 
function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}

console.log(isPerfectNumber(6)); // Output: true
console.log(isPerfectNumber(28)); // Output: true
console.log(isPerfectNumber(12)); // Output: false

// 13. Write a JavaScript function to compute the factors of a positive integer. 
function factors(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) result.push(i);
    }
    return result;
}

console.log(factors(15)); // Output: [1, 3, 5, 15]

// 14. Write a JavaScript function to convert an amount to coins. 
function amountToCoins(amount, coins) {
    let result = [];
    for (let coin of coins) {
        while (amount >= coin) {
            result.push(coin);
            amount -= coin;
        }
    }
    return result;
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1])); // Output: [25, 10, 10, 1]

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
function computeExponent(base, exponent) {
    return Math.pow(base, exponent);
}

console.log(computeExponent(2, 3)); // Output: 8

// 16. Write a JavaScript function to extract unique characters from a string. 
function uniqueChars(str) {
    return Array.from(new Set(str.split(''))).join('');
}

console.log(uniqueChars("thequickbrownfoxjumpsoverthelazydog")); 
// Output: 'thequickbrownfxjmpsvlazydg'

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 
function countLetters(str) {
    let count = {};
    str.split('').forEach(char => {
        count[char] = (count[char] || 0) + 1;
    });
    return count;
}

console.log(countLetters("hello")); 
// Output: { h: 1, e: 1, l: 2, o: 1 }

// 18. Write a function for searching JavaScript arrays with a binary search. 
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // Output: -1

// 19. Write a JavaScript function that returns array elements larger than a number. 
function elementsLargerThan(arr, num) {
    return arr.filter(element => element > num);
}

console.log(elementsLargerThan([1, 2, 3, 4, 5], 3)); // Output: [4, 5]

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
function generateId(length) {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

console.log(generateId(8)); // Output: Random 8 character string

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
function subsets(arr, length) {
    let result = [];
    let temp = Array(length).fill(null);
    function helper(start, index) {
        if (index === length) {
            result.push([...temp]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            temp[index] = arr[i];
            helper(i + 1, index + 1);
        }
    }
    helper(0, 0);
    return result;
}

console.log(subsets([1, 2, 3], 2)); 
// Output: [[1, 2], [1, 3], [2, 3]]

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
function countOccurrences(str, letter) {
    return str.split(letter).length - 1;
}

console.log(countOccurrences("microsoft.com", "o")); // Output: 3

// 23. Write a JavaScript function to find the first not repeated character. 
function firstNonRepeated(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
    return null;
}

console.log(firstNonRepeated("abacddbec")); // Output: 'e'

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
let array = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
console.log(bubbleSort(array));
// Output: [1, 4, 9, 12, 23, 64, 84, 98, 122, 213, 234, 345, 455, 546, 3223]

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
function longestCountryName(countries) {
    return countries.reduce((longest, country) => country.length > longest.length ? country : longest, "");
}

console.log(longestCountryName(["Australia", "Germany", "United States of America"])); // Output: "United States of America"

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
function longestUniqueSubstring(str) {
    let seen = new Map();
    let start = 0;
    let maxLength = 0;
    let startIndex = 0;

    for (let end = 0; end < str.length; end++) {
        if (seen.has(str[end])) {
            start = Math.max(seen.get(str[end]) + 1, start);
        }
        seen.set(str[end], end);
        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            startIndex = start;
        }
    }

    return str.slice(startIndex, startIndex + maxLength);
}

console.log(longestUniqueSubstring("abcabcbb")); // Output: "abc"
console.log(longestUniqueSubstring("bbbbb")); // Output: "b"
console.log(longestUniqueSubstring("pwwkew")); // Output: "wke"

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
function longestPalindrome(str) {
    if (!str || str.length <= 1) return str;

    let start = 0, maxLength = 1;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            if (right - left + 1 > maxLength) {
                start = left;
                maxLength = right - left + 1;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < str.length; i++) {
        expandAroundCenter(i - 1, i + 1); // Odd length
        expandAroundCenter(i, i + 1); // Even length
    }

    return str.substring(start, start + maxLength);
}

console.log(longestPalindrome("bananas")); // Output: "anana"
console.log(longestPalindrome("abracadabra")); // Output: "aca" or "ada"

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function executeFunction(fn, ...args) {
    return fn(...args);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(executeFunction(add, 2, 3)); // Output: 5
console.log(executeFunction(multiply, 2, 3)); // Output: 6

// 29. Write a JavaScript function to get the function name. 
function getFunctionName(fn) {
    return fn.name;
}

function sampleFunction() {
    console.log("Sample Function");
}

console.log(getFunctionName(sampleFunction)); // Output: "sampleFunction"
