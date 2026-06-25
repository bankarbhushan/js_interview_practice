// What is the method the access the  character at a particular index ?
    // ans : indexOf() method is used to access the character at a particular index in a string.
    // ans : charAt() method is used to access the character at a particular index in a string.

// what is the difference between undefined and undeclered in javascript ?
    // ans : undefined is a variable that has been declared but has not yet been assigned a value. 
    // ans : undeclared is a variable that has not been declared in the current scope.

// what are the ways to declered and contruct the object in javascript ?
    // ans : There are several ways to declare and construct objects in JavaScript, including:
    // 1. Object Literals: Using curly braces {} to define an object and its properties.
    // 2. Constructor Functions: Using a function to create an object and its properties.
    // 3. ES6 Classes: Using the class syntax to define a blueprint for creating objects.
    // 4. Object.create(): Creating a new object with a specified prototype object and properties.
    // 5. Factory Functions: Using a function that returns a new object each time it is called.
    // 6. Using the new Object() syntax: Creating an object using the Object constructor.
    // 7. Using the Object.assign() method: Creating a new object by copying properties from one or more source objects.
    // 8. Using the spread operator: Creating a new object by spreading the properties of an existing object into a new object.

// what is the difference between shallow copy and deep copy in javascript ?
    // ans : A shallow copy creates new object and copies the values of the original object's properties to the new object. 
    // However, if the original object contains nested objects or arrays, the shallow copy will only copy the references to those nested objects, not the actual values. 
    // This means that changes made to the nested objects in the shallow copy will also affect the original object.
    // A deep copy, on the other hand, creates a new object and recursively copies all the values of the original object's properties, including any nested objects or arrays.
    // This means that changes made to the nested objects in the deep copy will not affect the original object, as they are completely separate copies.
    // In summary, a shallow copy only copies the top-level properties of an object, while a deep copy creates a completely independent copy of the entire object, including any nested objects or arrays.

// can we used the shallow copy with the array ?
    // ans : Yes, we can use shallow copy with arrays in JavaScript.

// console.log(100 + "8" + 20 ) //100820
// how its working ?
    // ans : In JavaScript, when you use the + operator with a number and a string, the number is automatically converted to a string and concatenated with the other string. 
    // In this case, 100 is a number and "8" is a string, so the + operator converts 100 to a string and concatenates it with "8", resulting in the string "1008". 
    // Then, when you add 20 to that string, it is also converted to a string and concatenated with "1008", resulting in the final string "100820".


// console.log(100 - "8" - 20 ) // 72
// how its working ?
    // ans : In JavaScript, when you use the - operator with a number and a string, the string is automatically converted to a number (if possible) and then the subtraction is performed. 

// what are the different Looping structures in javascript ?
    // ans : There are several looping structures in JavaScript, including:
    // 1. for loop: A traditional loop that iterates over a block of code a specified number of times.
    // 2. while loop: A loop that continues to execute a block of code as long as a specified condition is true.
    // 3. do...while loop: Similar to the while loop, but the block of code is executed at least once before the condition is checked.
    // 4. for...in loop: A loop that iterates over the properties of an object.
    // 5. for...of loop: A loop that iterates over the values of an iterable object, such as an array or a string.
    // 6. forEach() method: A method that executes a provided function once for each element in an array.
    // 7. map() method: A method that creates a new array with the results of calling a provided function on every element in the calling array.
    // 8. filter() method: A method that creates a new array with all elements that pass a test implemented by a provided function.
    // 9. reduce() method: A method that applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
    // 10. some() method: A method that tests whether at least one element in the array passes a test implemented by a provided function.
    // 11. every() method: A method that tests whether all elements in the array pass a test implemented by a provided function.

    // let abc = 100;
    // if(function xyz(){}){
    //     abc = abc - typeof(xyz)  // what is the type of xyz here ? ans: The type of xyz here is "function".
    // }
    // console.log(abc) // ans : NaN 

    // let abc = 100;
    // if(function xyz(){}){
    //     console.log(typeof(xyz)) // undefined because xyz is not defined in this scope, so it will return undefined.
    //     abc = abc + typeof(xyz)  // what is the type of xyz here ? ans: The type of xyz here is "undefined".
    // }
    // // console.log(abc) // 100undefined

// what is the difference between slice and splice in javascript ?
    // ans : The slice() is the immutable . its returns the new array and does not modify the original array. we can extract the elements from the array but we can not add the elements in the array.
    // example :
    // let arr = [1, 2, 3, 4, 5];
    // let newArr = arr.slice(1, 4); // returns [2, 3, 4] and does not modify the original array
    // console.log(arr); // [1, 2, 3, 4, 5]
    // console.log(newArr); // [2, 3, 4]
    // ans : the splice() is the mutable method. we can extract the elements from the array and also we can add the elements in the array.
    // example :
    // let arr = [1, 2, 3, 4, 5];
    // arr.splice(1, 2, 6, 7); // removes 2 elements starting from index 1 and adds 6 and 7 at index 1
    // console.log(arr); // [1, 6, 7, 4, 5]
    