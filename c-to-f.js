console.log("Celsius to Farenheit");

let cToF = (celsius) =>{
    return (celsius * (9 / 5) + 32).toFixed(2);
}
// console.log(cToF(process.argv[2]));

// ---------------------------------or----------------------------------
// we can use array destructuring

let [, ,celsius] = process.argv;
console.log(cToF(celsius));