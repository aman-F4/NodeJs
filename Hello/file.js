 const fs = require("fs");
 // file  system

 //SYNC..  BLOCKING  REq  means that was synchronous call
//  fs.writeFileSync("./test.txt", "Hello World");

// Async.. NON BLOCKING  REq
// fs.writeFile("./test.txt", "Hello World Async", (err) => {});

// const result = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(result);

//Async does not return you have to use callback function
// fs.readFile("./contacts.txt","utf-8", (err, result)=>{
//     if(err){
//         console.log("Error", err);
//     }else{
//         console.log(result);
//     }
// });


fs.appendFileSync("./test.txt", `${Date.now()} Hey There`)


// fs.cpSync("./test.txt", "./copy.txt");

//  this is used to unlink(delete)
// fs.unlinkSync("./copy.txt")

console.log(fs.statSync("./test.txt").isFile());

// Default Thread Pool size = 4
// MAx? - jitne core cpu hai like  8core CPU means 8 thread

// node js has  a module called os it gives info about you operating systema nd about your computer
const os = require('os')
console.log(os.cpus().length);
