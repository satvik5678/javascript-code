const user = {
  username: "satvik",
  price: 999,
  welcome: function () {
    console.log(`${this.username}, welcome here!`);
    console.log(this);
  },
};

user.welcome();

//we can also print the this keyword
console.log(this);

// const chai = (a, b) => {
//   return a + b;
// };
// console.log(chai(4, 3));

const chai = (a, b) => a + b;
console.log(chai(4, 3));
