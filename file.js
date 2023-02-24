const fs = require("fs"); //import


// let quotes = "Communist until you become rich";
// for(let i = 1; i <= 10; i++){
//     fs.writeFile(`./backup/quote${i}.html`, quotes, (err) => {
//         console.log("Created file or Completed writing")
//     })
// }


// let text = "Be an optimist"
// let[, ,noOfFiles]=process.argv;
// genFiles(noOfFiles);

// function genFiles(noOfFiles){
//     if(noOfFiles > 100){
//         console.log("Maximum files reached");
//         return; //stops function(early return)
//     }
//     for(let i = 1; i <= noOfFiles; i++){
//         fs.writeFile(`./backup/proverb${i}.html`, text, (err) => {
//             console.log("Created file or Completed writing")
//         })
//     }
// }

// --------------------------------------read file---------------------------------

// fs.readFile("./read.txt", "utf-8", (err, data) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

// ----------------------------------------update file-------------------------------
// let quotes = "Communist until you become rich";
// fs.appendFile('./fun.html',"\n"+quotes, (err) => {
//     console.log("Created file or Completed writing")
// })

// --------------------------------------delete file----------------------------------
fs.unlink("./delete.css", (err) => {
    console.log("File deleted")
})