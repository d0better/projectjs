let users = [
    {name: "John", age: 18},
    {name: "Sarah", age: 25},
    {name: "Mike", age: 30}
];
let user = users.find(function(person) {
    return person.age > 20 ;
});
let index = users.findIndex(function(person) {
    return person.age > 20;
});
console.log(user);
console.log(index);