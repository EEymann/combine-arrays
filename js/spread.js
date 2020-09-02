const middle = ['lettuce', 'cheese', 'patty'];
const burger = ['top bun', ...middle, 'bottom bun']; //Spread operator: pass the values of one array into another array. Before the variable name you want to add, add '...'
console.log(burger);

const brass = ['trumpet', 'trumbone', 'french horn', 'baritone', 'tuba'];
const woodwind = ['flute', 'oboe', 'clarinet', 'saxophone', 'basoon'];
const instruments = [...brass, ...woodwind]; //The spread operator will extract each element in the initial arrays and place them in the new array.

console.log(instruments);

/**The spread syntax creates a copy of the original array.
 This means that even when the elements inside the original array change,
like the brass or woodwind arrays, the new array, like instruments, remains the same. So if you call the push, pop, shift, or unshift methods on the original array,
the elements will not be added/removed to/from the new array. Instead you have to call these methods directly on the new array. **/

/**Another handy aspect of the spread operator is that you can use it to pass arrays as arguments to functions. **/

const numbers = [10, 20, 30, 40];
console.log( Math.max(...numbers)); //Returns the largest number value from the array passed into it.
console.log( Math.min(...numbers)); //Returns the smallest number value from the array passed into it.
