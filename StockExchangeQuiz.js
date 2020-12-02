
var rlSync = require("readline-sync")
var chalk = require("chalk")
console.log(chalk.bgRed.bold("QUIZ GAME"))

var name = rlSync.question(chalk.yellow("Enter your name? "));

console.log("")
console.log(chalk.gray.bgRed.inverse("Welcome "+chalk.bgYellow.underline(name)+", Lets see how well you know Share Market."))
console.log("------------------------------------------------------------")

var score = 0;
function qna(ques, ans) {
  var user = rlSync.question(chalk.cyan(ques));

  if (user === ans) {
    console.log(chalk.green("Your answer is correct"));
    score += 1;
  } else {
    console.log(chalk.red("Your answer is wrong"));
  }
  console.log("------------------------------------------------------------")
}

//questions
ques1 = {
  ques: `What is NSE?

  (A) National Share Exchange

  (B) National Stock Exchange

  (C) NewYork Share Exchange \n`, ans: "B"
};
ques2 = {
  ques: `Where is BSE located?
  A. Mumbai Street
  B. Wall Street
  C. Dalal Street \n` , ans: "C"
};
ques3 = {
  ques: ` How many companies are included in the SENSEX?

(A) 30

(B) 50

(C) 100 \n`, ans: "A"
};
ques4 = {
  ques: `What is called "Blue Chip"?

(A) Companies which are run by large corporate houses

(B) A company, whose share always provides profit

(C) A company which is listed on a foreign stock exchange \n`, ans: "B"
};

ques5 = {
  ques: `When was Nifty established?

(A) 1965

(B) 1991

(C) 1996 \n`, ans: "C"
};

ques6 = {
  ques: `Which of the following term does not exist in share market?

  (A) NSDL
  
  (B) IPO
  
  (C) BSI \n`, ans: "C"
};

var setQ = [ques1, ques2, ques3, ques4, ques5, ques6]

for (var i = 0; i < setQ.length; i++) {
  qna(setQ[i].ques, setQ[i].ans)
}

//highscore
var highScore = [{ name: "Pratik", score: "6"}, {name: "Ramesh", score: "5"}, {name: "Hussain", score: "5"}];

console.log(chalk.yellow(" Your final score is: ") + chalk.blue.bold(score));
console.log("")
console.log(chalk.yellow("High-Scores List"))

for(var z=0; z<highScore.length; z++){
  console.log(chalk.yellow("Name: "+chalk.blue.bold(highScore[z].name)+"     Score: "+chalk.blue.bold(highScore[z].score)));
}
console.log("------------------------------------------------------------")
if (score >= highScore[0].score ){
  console.log(chalk.bgGreen.black(`CONGRATULATION!!!
## Send a screenshot you have created a High-Score.##`))
}
else{
  console.log(chalk.bgRed("## Unfortunately you haven't beaten the High-Score ##"))
  console.log(chalk.bgRed("## Lets connect and know more about the topic ##"))
}
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
var str = "\nClick above to connect with me on LinkedIn ";
var result = str.link(chalk.blue("https://in.linkedin.com/in/pratik-kumhar-2675551a1"));
console.log(result)
console.log("------------------------------------------------------------")