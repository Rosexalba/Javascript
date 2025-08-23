// const fruits = ["Apple", "banana", "Cherry"];
// console.log(fruits); // Output: ["Apple", "banana", "Cherry"];

// // Declaring & Manipulating Arrays 
// // ACCESSING THE ARRAY ELEMENT: Arrays are 0 indexed - zero is the first item
// // so if you console.log fruits at the zero index youll see that it says apple

//       console.log(fruits[0]);

// // if you console.log at the 2 you will see Cherry

//       console.log(fruits[2]);


// // CHANGING ARRAY ELEMENTS: modify array values directly 

//       console.log(fruits[1]); // output: banana 

// // you can change it by saying fruits and then assign a new value there.
      
//       fruits[1] = "Blueberry"
//       console.log(fruits);

//  // FINDING THE LENGTH OF AN ARRAY:

//      console.log(fruits.length); // Output:3


// ARRAY METHODS:
//       // push - adds to end
//    fruits.push("Mango");
//    console.log(fruits); 

//      // pop - removes from end
//    fruits.pop();
//    console.log(fruits);

//      // shift - removes from the beginning  
//    fruits.shift();
//    console.log(fruits);

//      // Unshift - adds to the beginning 
//    fruits.unshift("Grapes");
//    console.log(fruits);

//      // Splice - add / removes elements fruits.splice(index one, adding one, "new element")

//    fruits.splice(1, 1, "peach");
//    console.log(fruits);
   
//      // Splice- remove / run: fruits.splice(from index one,remove 2 elements)
//    fruits.splice(1,2);
//    console.log(fruits);

     // Map: 
     const numbers = [1,2,3,4,5];
     console.log("numbers=", numbers);
     const doubled = numbers.map(num => num * 2)
     console.log("doubled=", doubled); // outputs doubled numbers
     console.log("numbers=", numbers); // outputs original a

     // in this example it will go into index 1 and go through each number twice and output double 

     // filter:
     const evenNumbers = numbers.filter(num => num % 2 === 0)
     console.log(evenNumbers)
     




     
     