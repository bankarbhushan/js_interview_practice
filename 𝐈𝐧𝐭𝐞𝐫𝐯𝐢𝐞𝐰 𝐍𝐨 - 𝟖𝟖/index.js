// console.log(a);
// console.log(b);
// var a = b = 200; 
// b is not defined

// what is the difference between spred operator and rest parameter in javascript ?
    // ans : The spread operator is used to expand the array , sting and objet elements and create the new array, string and object.
    // eg:
    // let arr = [1, 2, 3];
    // let newArr = [...arr, 4, 5]; // returns [1, 2, 3, 4, 5] and does not modify the original array
    // ans : rest parameter is used to collect the multiple arguments which we have calling the function .
    // eg:
    // function sum(...args) {
    //     return args.reduce((acc, curr) => acc + curr, 0);
    // }
    // console.log(sum(1, 2, 3, 4, 5)); // returns 15
  
// console.log("5"+8) // "58"
// console.log("5"-3) //2

// console.log(NaN === NaN) // false because NaN is not equal to anything, including itself.  and we dont know what we are storing .

// =============================== Curring in javascript ===============================

// it take a one argument at a time and return the function which take the next argument and so on. and finally return the result when we call the function with no argument.
// why do we use curring in javascript ?
    // ans: To avoide the passing the same variable again and again. 
    // To create the higher order function.
    // To make you r function pure. 

function curring(a){
    return function (b){
            return a+b;
    }
}
console.log(curring(5)(10)) // 15

// infinate Curring in javascript

function infinateCurring(a){
    return function (b){
        if(b === undefined){
            return a;
        }
        return a+b;
    }
}
console.log(infinateCurring(1)(2)());        // 3
console.log(infinateCurring(1)(2)(3)());     // 6
console.log(infinateCurring(1)(2)(3)(4)());  // 10

// partical application of curring in javascript

function sum(a){
    return function(b,c){
        return a+b+c;
    }
}

sum(1)(2,3) // 6