var readlineSync = require('readline-sync');
const chalk = require('chalk');


var maxDate =31;
var maxMonth =12;

function welcome(){
  console.log(chalk.greenBright("Prime number which is divisible only by itself and 1\n (e.g. 2, 3, 5, 7, 11)."));
  console.log(chalk.greenBright("let's check your birthday is a prime number or not"));
  console.log(chalk.cyanBright("************************"));
var userName = readlineSync.question(chalk.blue.bold('What is your Name ?\n '));
console.log(chalk.yellowBright.bold("welcome "+userName));
console.log(chalk.cyanBright("************************"));
}


function askUser(){
  var date = readlineSync.question(chalk.magentaBright.bold('What is your birth-date ? DD\n'));
   var month = readlineSync.question(chalk.magentaBright.bold('What is your birth-month ?MM\n'));
   console.log(chalk.cyanBright("*********************"));
   var userAns = date+month;
if(isNaN(date) ||isNaN(month)){
  console.log(chalk.red.bold("Please ennter number"));
}
   else   if(date>maxDate || month>maxMonth){
    console.log(chalk.red.bold(`date should not exceed ${maxDate} and month should not exceed ${maxMonth}`));
  }

  else{
    checkPrime(userAns)
  }
}

function checkPrime(userAns){
  var userCorrAns = parseInt(userAns);
  var isPrime =true;

    for(var i=2;i<userCorrAns;i++){
    if(userCorrAns % i ==0){
      isPrime = false;
      break;
    }
  } if(isPrime){
    console.log(chalk.green.bold("Its a prime number"));
  }else{
    console.log(chalk.red.bold(" Sorry! Its not a prime number"));
  }
  
  }

welcome();
askUser();