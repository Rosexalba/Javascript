const person = {
    name: "Alice",
    age: 25,
    city: "New York",
};

console.log(person);

// to access object properties 

console.log(person.name);

console.log(person['age']) // same thing different syntax

// adding and updating properties

person.country = "USA"
console.log(person);

// updating a property
person.age = 30
console.log(person);

// Removing properties 
delete person.city
console.log(person)

// Looping using for..in
for (const key in person) {
    console.log["key=", key]
    console.log("value =", person[key])
}

