function greet(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = { firstName: "John", lastName: "Doe" };
console.log(greet(user));
