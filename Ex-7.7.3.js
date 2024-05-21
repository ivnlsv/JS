let users = [
   {
    name: "John",
    age: 28,
   },
   {
    name: "Petr",
    age: 18,
   },
   {
    name: "Nick",
    age: 16,
   },
   {
    name: "Arnold",
    age: 12,
   }
];
const usersOver18 = users.filter(user => user.age >= 18);
const namesOfUsersOver18 = usersOver18.map(user => user.name);
console.log(usersOver18);
console.log(namesOfUsersOver18); 
 
    