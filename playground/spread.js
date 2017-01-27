// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

// var groupA = ['Lola', 'Sammi'];
// var groupB = ['Owen'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

// var person1 = ['Walter', 59];
// var person2 = ['Colleen', 17];
//
// function names (name, age) {
//   var nameAge = "Hi " + name + ", you are " + age;
//    return nameAge;
// }
//
// console.log(names(...person1));
// console.log(names(...person2));

var names = ['Lola', 'Sammi'];
var final = [...names, 'Owen'];

for (x in final) {
  console.log("Hi " + final[x]);
}

final.forEach(function (name) {
  console.log("Hi " + name);
})
