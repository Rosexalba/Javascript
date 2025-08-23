# Arrays and Objects 
What you wil learn:
 - Declaring and Manipulating Arrays 
 - Array Methods (push,pop,splice,map,filter,forEach)
 - Declaring and Manipulating objects 
 - Object methods and property access
 - mini project: student management system 

 # Declaring and manipulating Arrays 
 
 ## Array:
 and array is a special variable that stores multiple values in a single variable

const fruits = ["Apple", "banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "banana", "Cherry"];

# accesing the array element: 
Arrays are 0 indexed - zero is the first item
so if you console.log fruits at the zero index youll see that it says apple

    - console.log(fruits[0]);

 if you console.log at the 2 you will see Cherry

    - console.log(fruits[2]);


# Changing array elements: 
modify array values directly 

    - console.log(fruits[1]); // output: banana 

- you can change it by saying fruits and then assign a new value there.
      
      fruits[ 1] = "Blueberry"
      console.log(fruits);

 # Finding the length of an Array:

     console.log(fruits.length); // Output:3

# array methods
1. Push: adds to the end of the array and it adds a new element at the end of an array
2. Pop: removes the end of the array removes the last element in the array
3. Shift: removes from the beginning of an array it removes the first element of the array
4. Unshift: adds to the beginning it adds a new element to the beginning 


    // push
   - fruits.push("Mango");
   - console.log(fruits); 

    // pop 
   - fruits.pop();
   - console.log(fruits);

   // shift 
   - fruits.shift();
   - console.log(fruits);

   // Unshift 
   - fruits.unshift("Grapes");
   - console.log(fruits);

5. Splice: adds or removes elements: it can do everything pop,shift,push,unshift can do

// Splice - add / removes elements fruits.splice(index one, adding one, "new element")
   - fruits.splice(1, 1, "peach");
   - console.log(fruits);
   
// Splice - remove / run: fruits.splice(from index one,remove 2 elements)
   - fruits.splice(1,2);

6. Map: it transfroms the elements inside the array: it creates a new array by applying a function to each element or callback to each element

      // Map: 
     - const numbers = [ 1,2,3,4,5];
     - console.log("numbers=", numbers);
     - const doubled = numbers.map(num => num * 2)
     - console.log("doubled=", doubled); // outputs doubled numbers
     - console.log("numbers=", numbers); // outputs original a

     - in this example it will go into index 1 and go through each number twice and output double.

7. Filter: it gets a specific element: it creates a new array with elements that match a condition

- const evenNumbers = numbers.filter(num => num % 2 === 0)
    -  console.log(evenNumbers) // using the example above to complete this. with the filter method we are filtering out the outputs we desire // outputs will be (2,4)


# Declaring and Manipulating objects

