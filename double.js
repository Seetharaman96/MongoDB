// console.log("Hello World");
// console.log(global);

// -----------------------------------command line tool-------------------------------

// console.log(process.argv)

let dbl = (n) => n * 2;
// console.log(dbl(10))
console.log(dbl(process.argv[2]));