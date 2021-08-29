const noblox = require('noblox.js')
var prompt = require('prompt-sync')();
var fs = require("fs")
/// made by stiizzy cat
/// this is just simple code, not much...


var Cum = prompt('Please enter a decal name ');
var SEX = prompt('Please enter a time [in miliseconds] ');
console.log("your decal has been scheduled to upload! :)")

async function startApp () {





    const currentUser = await noblox.setCookie('Your cookie here') 
    await new Promise(resolve => setTimeout(resolve, SEX));
    console.log("uploaded the decal")
    console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)
    noblox.uploadItem(`${Cum}`, 13, fs.createReadStream("./decal.png")) ///// name your finished decal, decal.png
}
startApp()
