const readLine = require("readline");
const r1 = readLine.createInterface({input :process.stdin, output :process.stdout});

let num1 = Math.floor(Math.random()*10 + 1);
let num2 = Math.floor(Math.random()*10 + 1);
let answer = num1 + num2;

r1.question(`What is the result of sum of ${num1} and ${num2}?\n` ,(userInput) => {

    if(userInput.trim() == answer){
        console.log("Aga sen bu işi kaptın");
        r1.close();
    }else{
        console.log("Aga bu zeka bu bünyeye zarar ");
        r1.close();

    }
} );