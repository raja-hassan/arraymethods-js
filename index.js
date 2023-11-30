// Array Creation
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];

// Array Methods
// 1. push(): Add elements to the end
numbers.push(6, 7);
console.log(numbers);

// 2. pop(): Remove the last element
fruits.pop();
console.log(fruits);

// 3. unshift(): Add elements to the beginning
numbers.unshift(-1, 0);
console.log(numbers);

// 4. shift(): Remove the first element
fruits.shift();
console.log(fruits);

// 5. slice(): Extract a portion of the array
let slicedNumbers = numbers.slice(2, 5);
console.log(slicedNumbers);

// 6. splice(): Modify array by removing or replacing elements
numbers.splice(2, 2, 'two', 'three');
console.log(numbers);

// 7. concat(): Concatenate arrays
let combinedArray = numbers.concat(fruits);
console.log(combinedArray);

// 8. indexOf(): Find the index of an element
let index = numbers.indexOf('two');
console.log(index);

// 9. includes(): Check if an element is present
let includes = fruits.includes('apple');
console.log(includes);

// 10. join(): Create a string from array elements
let joinedNumbers = numbers.join('-');
console.log(joinedNumbers);

// 11. reverse(): Reverse the array
let reversedFruits = fruits.reverse();
console.log(reversedFruits);

// 12. map(): Create a new array by applying a function to each element
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

// 13. filter(): Create a new array with elements that satisfy a condition
let positiveNumbers = numbers.filter(num => num > 0);
console.log(positiveNumbers);

// 14. reduce(): Reduce the array to a single value
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// 15. forEach(): Execute a function for each array element
fruits.forEach(fruit => console.log(fruit));

// 16. every(): Check if all elements satisfy a condition
let allPositive = numbers.every(num => num > 0);
console.log(allPositive);

// 17. some(): Check if at least one element satisfies a condition
let somePositive = numbers.some(num => num > 0);
console.log(somePositive);
