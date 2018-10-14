//es6 object destructuring

// const person = {
//     age: 28,
//     location: {
//         city: 'Phily' ,
//         temp: 92
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;

// const {city, temp: temperature} = person.location;

// console.log(`${city} is ${temperature} and ${firstName}`)

//es6 array destruturing 

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state = 'New York', zip] = address;

console.log(`You are in ${city} ${state}. `);

const item = ['coffee (hot)', '$2', '$2.5', '$2.75'];

const [sellingItem, smallPrice, mediumPrice, largePrice] = item;

console.log(`A medium ${sellingItem} costs ${mediumPrice} .`)

