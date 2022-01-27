
   var readlineSync=require('readline-sync')
var score=0
var userName=readlineSync.question('May I Know your Name? ')
console.log("Hello "+userName+"!,Let's start with How Well Do You Actually Know Neha.")

function play(question,answer)
{
  var userAnswer=readlineSync.question(question)
  if(userAnswer==answer)
{
  console.log("You are Right")
 score=score+1;
}
else
{
  console.log("You are Wrong")
 score=score-1;
}
console.log("Your Current Score is:"+score)
console.log("--------------")
}
 
var questions=[{question:"What's Neha's Last name? ",answer:"Manjunath"},
 {question:"When was Neha born? ",answer:"March 27th"},
{question:"How many siblings does Neha have? ",answer:"0"},
 {question:"Where does neha From? ",answer:"Banglore"},
{question:"What's Neha's Favorite Color? ",answer:"Red"},
{question:"What's Neha's Favorite Dish? ",answer:"Melogra"},
{question:"What's her lucky number? ", answer:"27"}]

for(var i=0;i<questions.length;i++)
{
  var currentQuestion=questions[i]
  play(currentQuestion.question,currentQuestion.answer)
}

console.log("Your total score is "+score)