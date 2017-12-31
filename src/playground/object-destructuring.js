const person = {
  name: "Janine",
  age: 47,
  location: {
    city: 'Glenmoore',
    temp: 28
  }
};

// we can pull out the properties we want off of the object without having to reference them via the object
// const name = person.name;
// const age = person.age;

// es6 destructuring - right side of = is the object, left side are the props we want from it.
// set up a default
const { name: firstName = 'no name', age } = person;

console.log(`${firstName} is ${age}`);

// nested object destructuring example
// const {city, temp} = person.location;
// if (city && temp){
//   console.log(`It's ${temp} in ${city}.`);
// }

// you can rename the variable of the object we are destructuring
const { city, temp: temperature } = person.location;
console.log(`Temp is: ${temperature}`);

// you can set a default value 

const book = {
  title: 'Ego the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);