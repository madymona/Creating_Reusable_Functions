//Part 1: Thinking Functionally

//Take an array of numbers and return the sum
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum
}
console.log(sumArray([13, 45, 97, 33, 78]))

//Take an array of numbers and return the average.
//Take an array of strings and return the longest string.
//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
//Take a number, n, and print every number between 1 and n without using loops. Use recursion.


//Part 2: Thinking Methodically

// Sort the array by age.
// Filter the array to remove entries with an age greater than 50.
// Map the array to change the “occupation” key to “job” and increment every age by 1.
// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.



// Part 3 Thinking Critically   

/* develop functions that accomplish the following:
Take an object and increment its age field.
Take an object, make a copy, and increment the age field of the copy. Return the copy.
For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.*/