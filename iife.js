//IMMEDIATELY INVOKED FUNCTION EXPRESSION

//named IIFE
(function chai() {
  console.log("DB CONNECTED");
})();

// the semicolon at the end of the above code is very necessary

//Simple IIFE

((uname) => {
  console.log(`${uname} welcome to new world`);
})("Satvik");
