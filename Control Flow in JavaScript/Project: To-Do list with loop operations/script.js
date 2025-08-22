const tasks = [] //init where todos will go

while(true) {
    // asking for user input
    let task = prompt("Enter as task (or type 'done' to finish)")
     
    // check if user input is done or Done or DONE
    if (task.toLowerCase() === 'done') {
        break // id done breaking out of while loop
    }
    
    tasks.push(task) // adding user input tasks
}

// TO display tasks

// console.log("Your Todo list:")
// tasks.forEach((task, index) => {
//     console.log(`${index + 1}, ${task}`)
// });

// another way

console.log("your Todo list:")
for(let i = 0; i < tasks.length; i++) {
    console.log(`1${i +1}, ${tasks[i]}`);
}