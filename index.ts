#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.blue("\n\t\t", "+".repeat(55)));
console.log(
  "\t\t========>",
  chalk.black.hex("#FF8800")("Hello! Wellcome to our ATM service"),
  "<========="
);
console.log(chalk.bold.blue("\t\t", "+".repeat(55), "\n"));

let myBalance = 10000;
let mypin = 4321;

let answer = await inquirer.prompt([
  {
    type: "number",
    name: "Pin",
    message: chalk.yellow.bold.underline("\t\t>>> Enter your pin code ===> "),
  },
]);
if (answer.Pin === mypin) {
  console.log(
    chalk.green.underline("\n\t>>> Pin is correct , Login Successfully !")
  );

  let operationAns = await inquirer.prompt([
    {
      type: "list",
      name: "operation",
      message: chalk.magenta.bold.underline("\n\t\t>>> Please Select option :"),
      choices: ["withdraw", "Fast cash", "Check Balance"],
    },
  ]);
  // if user select withdraw :
  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: chalk.bold.blue.underline("\n\t\t >>> Enter your amount ==>"),
      },
    ]);
    if (amountAns.amount <= myBalance) {
      let balance = myBalance - amountAns.amount;
      console.log(
        chalk.yellow.bold.underline(
          `\n\t>>> Your remaining balance is ----> ${balance}`
        )
      );
    } else {
      console.log(
        chalk.red.bold.underline("\n\t >>> You have Insufficient balance :")
      );
    }
    // if user select "Fast cash"
  } else if (operationAns.operation === "Fast cash") {
    let FastcashAns = await inquirer.prompt([
      {
        name: "amount",
        type: "list",
        message: chalk.blue.bold.underline(
          "\n\t\t >>> Please select amount ==>"
        ),
        choices: ["1000", "3000", "5000", "10000", "15000"],
      },
    ]);

    if (FastcashAns.amount <= myBalance) {
      let balance2 = myBalance - FastcashAns.amount;
      console.log(
        chalk.green.bold.underline(
          `\n\t\t >>> Your Remaining balance is ----> ${chalk.red.underline(
            balance2
          )}.`
        )
      );
    } else {
      console.log(
        chalk.red.bold.underline(`\n\t\t >>> You have Insufficient amount :`)
      );
    }
  } else if (operationAns.operation === "Check Balance") {
    console.log(
      chalk.green.bold(
        `\n\t\t your balance is ----> ${chalk.red.underline(myBalance)}`
      )
    );
  }
} else {
  console.log(
    chalk.red.underline("\n\t\t >>>> Pin is incorrect, Try Again !")
  );
}
