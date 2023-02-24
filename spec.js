const os = require("os"); //import

console.log("Free memory:", (os.freemem() / 1024 / 1024 / 1024).toFixed(2),'GB');
console.log(`Total memory: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
console.log("Version:", os.version());
console.log("CPU:", os.cpus());