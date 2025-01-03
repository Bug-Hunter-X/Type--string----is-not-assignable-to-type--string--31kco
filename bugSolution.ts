function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
//console.log(greeter(user)); //This will cause an error because the function expects a string and receives an array

function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(" ");
}

console.log(greeterArray(user)); //This will work because the function expects an array of strings

let user2 = "Jane Doe";
console.log(greeter(user2)); //This also works because the function expects a string and receives a string