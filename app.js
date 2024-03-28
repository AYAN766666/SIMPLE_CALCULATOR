#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "NumberOne" },
    { message: "Enter your second number", type: "number", name: "NumberTwo" },
    { message: "Select one of operators to perform action", type: "list", name: "operator", choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"] },
]);
//CONDITIONAL STATEMENT 
if (answer.operator === "ADDITION") {
    ;
    console.log(answer.numberOne + answer.numberTwo);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log(answer.NumberOne * answer.sNumberTwo);
}
else if (answer.operator === "DIVISION") {
    console.log(answer.numberOne / answer.NumberTwo);
}
else if (answer.numberOne === "SUBTRACTION") {
    console.log(answer.numberOne - answer.numberTwo);
}
else {
    "please select correct operator";
}
