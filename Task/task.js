let person = [
    {
        name: "Gagan",
        age: 23,
        city: "Banglore"
    },
    {
        name: "Naveen",
        age: 26,
        city: "Banglore"
    },
    {
        name: "Manoj",
        age: 23,
        city: "Banglore"
    }
];

const cities = person.reduce((accumulator, person) => {
  accumulator.push(person.city);
  return accumulator;
}, []);

console.log(cities); // ["Banglore", "Banglore", "Banglore"]
