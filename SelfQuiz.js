
var rlSync = require("readline-sync")

console.log("GAME")
var name = rlSync.question("Enter your name? ")
console.log("")
console.log("Welcome "+name+", Lets see how well you know Pratik")
console.log("------------------------------------------------------------")
var score = 0;
function qna(ques, ans) {
  var user = rlSync.question(ques);

  if (user === ans) {
    console.log("Your answer is correct");
    score += 1;
  } else {
    console.log("Your answer is wrong");
  }
  console.log("------------------------------------------------------------")
}

//questions
ques1 = {
  ques: "What is my Surname? ", ans: "Kumhar"
};
ques2 = {
  ques: "Where do I live? ", ans: "Mumbai"
};
ques3 = {
  ques: "What is my favourite fruit? ", ans: "Mango"
};
ques4 = {
  ques: "What is my favourite color? ", ans: "Black"
};
ques5 = {
  ques: "When is my birthday? (answer format e.g: 01Feb )", ans: "08Jan"
};

var setQ = [ques1, ques2, ques3, ques4, ques5]

for (var i = 0; i < setQ.length; i++) {
  qna(setQ[i].ques, setQ[i].ans)
}

//highscore
var highScore = [{ name: "Pratik", score: "5"}, {name: "Ramesh", score: "4"}, {name: "Hussain", score: "5"}];

console.log(" Your final score is: " + score);
console.log("")
console.log("HighScores List",highScore)
console.log("## send a screenshot if you have beaten the High Score.##")