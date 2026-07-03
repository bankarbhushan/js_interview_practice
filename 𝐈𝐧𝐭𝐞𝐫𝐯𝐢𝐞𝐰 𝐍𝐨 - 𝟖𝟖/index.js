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

// function curring(a){
//     return function (b){
//             return a+b;
//     }
// }
// console.log(curring(5)(10)) // 15

// // infinate Curring in javascript

// function infinateCurring(a){
//     return function (b){
//         if(b === undefined){
//             return a;
//         }
//         return a+b;
//     }
// }
// console.log(infinateCurring(1)(2)());        // 3
// console.log(infinateCurring(1)(2)(3)());     // 6
// console.log(infinateCurring(1)(2)(3)(4)());  // 10

// // partical application of curring in javascript

// function sum(a){
//     return function(b,c){
//         return a+b+c;
//     }
// }

// sum(1)(2,3) // 6

// ======================================= shallow copy and deep copy ==============================

// const obj1 = {
//     name : "John",
//     address :{
//         street : "123 Main St",
//         city : "New York"
//     }
// }

// const obj2 = {...obj1};
// obj2.name ="bhushan";
// obj2.address.street = "456 Main St"; 
// console.log(obj1.name)
// console.log(obj2.name) 
// console.log(obj1.address.street)
// console.log(obj2.address.street) 

// // deep copy of object in javascript
// const obj3 = JSON.parse(JSON.stringify(obj1));

// console.log(obj3);
// obj3.name = "ram"
// obj3.address.street = "789 Main St";
// console.log(obj1.name) 
// console.log(obj3.name) 
// console.log(obj1.address.street) 
// console.log(obj3.address.street) 

// ==================================== if else ===============================
// what is the difference between if else and ternary operator in javascript ?
    // both are used to make the dicision based on the conditon.
    // only exicute the one block of code based on the condition.
    // in the kif else and we have the nested if else , its used to write the long length code 

    // ternary operator is used to write in the sort 
    // we are defined the conditon first then werite the ? and wtrite true block then : then write false block.


// ----------------------------------- React ------------------------------------------// 

// ==> what is the difference between DOM and Virtual DOM in react ?
    // DOM is the actual representation of the UI in the browser. It is a tree-like structure that represents the HTML elements on the page. When we make changes to the DOM, the browser has to re-render the entire page, which can be slow and inefficient.
    // Virtual DOM, on the other hand, is a lightweight copy of the actual DOM. When we make changes to the UI in React, it updates the Virtual DOM first, and then compares it to the actual DOM using a process called "diffing". 
    // This allows React to only update the parts of the actual DOM that have changed, which can be much faster and more efficient than re-rendering the entire page.

// ==> what is JSX in react ?
    // JSX is javacript syntax which is used to write the HTML code in the javascript file. It is a syntax extension for JavaScript that allows us to write HTML-like code in our JavaScript files. JSX is not valid JavaScript, so it needs to be transpiled into regular JavaScript before it can be executed by the browser.HTML code into the javascript file.
    // so that that tag is basically end of the day its objct , so for this it used the rect.createElement() method to create the element in the react.

// ==> What are the Hooks that you used ?
    // useState, useEffect, useCallback, useRef, UseMemo, useContext , useReducer, useNavigate.

// ==> what is the difference between contaxt api and reduxtoolkit in react ?
    // Context API is used to manage the global state of the application. 
    // In this we are passing the data as props to the child component and also thier child element.
    // so the problem is we the nested child of the child that want the vlaue but we have to pass it by the multiple level
    // so its consume the lot if effort and time , also it hard to manage the state 
    // so for this problem RTK come into the picture .
    // we are creating the slice of the eache task and we are handle by useSubscribe hook to get the vlaue form the rtk directly 

// ==> how to used the routing in react ?
    // we are using the react-router-dom package to implement the routing in react.
    // we are using the BrowserRouter, Routes, Route, Link, NavLink, useNavigate, useParams, useLocation hooks to implement the routing in react.

// ==> what is BrowserRouter 
    // BrowserRouter is a component provided by the react-router-dom package that wraps the application and enables routing functionality. It uses the HTML5 history API to keep the UI in sync with the URL. 
    // used params is used for dynamic routing int react.

// ==> what is the difference between Link and NavLink in react ?
    // Link is used to navigate to different routes in the application. It is used to create a hyperlink to a different route in the application. It does not have any active class by default.
    // NavLink is similar to Link, but it is used to create a navigation link that can be styled based on whether it is active or not. It has an active class by default, which can be used to style the active link differently from the inactive links.

// ==> what is the difference between stateful and stateless component in react ?
    // Stateful component is a component that has its own state and can manage its own data. It can be a class component or a functional component that uses the useState hook to manage its state. It can also have lifecycle methods to handle side effects.
    // Stateless component is a component that does not have its own state and relies on props to receive data from its parent component. It can be a functional component that does not use the useState hook or a class component that does not have any state. It is also known as a presentational component because it is mainly used to render UI based on the props it receives.
    
// ==> what is the difference between angular and react ?
    // Angular is a full-fledged framework that provides a complete solution for building web applications. It has a steep learning curve and requires knowledge of TypeScript, RxJS, and other concepts. It uses two-way data binding and has a complex architecture.
    // React is a library that focuses on building user interfaces. It has a shallow learning curve and requires knowledge of JavaScript, JSX, and other concepts. It uses one-way data binding and has a simple architecture.

// what is the difference between oneway data binding and two way data binding 
    // one-way data binding is a unidirectional flow of data from the parent component to the child component. It means that the data can only be passed from the parent to the child, and any changes made in the child component will not affect the parent component. It is used in React.
    // two-way data binding is a bidirectional flow of data between the parent and child components. It means that any changes made in the child component will also affect the parent component, and vice versa. It is used in Angular.

// what is the code splitting in react ?
    // Code splitting is a technique used in React to split the code into smaller chunks that can be loaded on demand. It helps to improve the performance of the application by reducing the initial load time and allowing the user to load only the necessary code for the current view. It can be achieved using dynamic imports, React.lazy, and Suspense components.
    // real life example is like when we are using the social media application like facebook, instagram, twitter etc. when we are loading the home page then it will load the home page code only and when we are clicking on the profile page then it will load the profile page code only. so this is the code splitting in react.


/// ----------------------------------- HTML ------------------------------------------// 

// ==> what is the difference between img tag and figure tag
    // img tag is used to display an image only.
    // figure tag is a semantic container used to group an image, diagram, code snippet, etc., along with an optional figcaption.

// ==> what is the difference between inline level and block level element 
    // block level element it takes the entire width of the webpage.
    // inline level element takes only the width required by its content and does not start on a new line.

// ==> what is the difference between (em) tag and (i) tag
    // em tag is used to give semantic emphasis to the text, and screen readers also emphasize it.
    // i tag is used only to make the text italic without adding any semantic meaning.


// ----------------------------------- css ------------------------------------------// 

// ==> what is the difference between display none and visibility hidden
    // display: none will remove the element from the page layout, but it still exists in the DOM.
    // visibility: hidden will render the element and keep its space in the layout, but it will not be visible on the UI.


// ==> what is the meaning of the universal selector 
    // * {} whatever CSS we write here will be applied to all HTML elements.
    // it has the lowest specificity (0-0-0) and is commonly used for CSS reset.
