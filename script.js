const person = {
  name: "Anna",
  age: 40,
  father: {
    name: "Andrew",
    age: 67,
  },
};

const {
  father: { name: fathersName },
} = person;

console.log(fathersName); // Sprawdzam poprawność działania
