# Asynchronous Code and setTimeout() - Delayed Execution of code 
What we will cover 
- understanding synchronous vs asynchronous javascript
- setTimeout and setinterval for delayed execution
- working with promises ( resolve,reject, .then(), .catch() )
- using async/await for cleaner asynchronous code
- handling errors with try-catch
- mini project: simulated API Call loading indicator 

# understanding Synchronous vs Asynchronous javascript
1. # what is synchronous code?
: Javascript executes code line by line. each task must complete before the next one starts. Everything runs in order.

 < script>
        console.log("start");
        console.log("Processing...");
        console.log("End");

2. # What is Asynchronous code?
: some tasks like API calls or timers take time to complete. Javascript can continue running other code while waiting. 



 ## setTimeout()
 : Delayed execution of code. Delays executions allowing other code to run first, it executes code after delay. 
 - in the example below the console will log "Start" and "End" and then 2 seconds later "Processing..."

  < script>

        console.log("Start");

        setTimeout(() => {
            console.log("Processing...")
        }, 2000);

        console.log ("End");

## setInterval()
: Running a function every X milliseconds. it executes code repeatedly

< script>

        let count = 0;

        const interval = setInterval(() => {
            ++count;
            console.log(`count: ${count}`);

            if(count === 10) {
                clearInterval(interval);
            }
        }, 1000);

## .then() 
: runs if the problem is resolved
## .catch()   
: runs if the problem is rejected  

< script>

        function fetchData() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let success = Math.random() > 0.5; // randomly succeeds or fails 
                    success ? resolve("Fetched Data!") : reject("Error fetching data!")
                }, 2000);
            });
        }

        fetchData()
         .then((data) => console.log(data)) // success
         .catch((error) => console.error (error));

# async & await 
: for writing cleaner code. its like synthetic sugar wrapping new Promise. it simplifies promise handling and it looks more like synchronous code

< script>

        async function loadData() {
            console.log("FETCHING DATA....")
            try {
                const response = await new Promise(resolve => {
                    setTimeout(()=> resolve("Data successfuly loaded!"), 3000);
                });
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        }

        loadData()
        console.log("End of Script");

# try..
: catch blocks to handle erroses in async functions:

< script>

     async function fetchUser() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users/1"
                );
                const user = await response.json();
                console.log("user=", user);
              } catch (error) {
                console.error("error fetching user!", error)
              }
            }

         fetchUser();