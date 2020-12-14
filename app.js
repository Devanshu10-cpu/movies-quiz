var readlineSync = require('readline-sync');

var score = 0
var x = 0

var userName = readlineSync.question(" What's your name ? ");

console.log("welcome " + userName + " TO MOVIES QUIZ ! ")

var chalk = require('chalk');

console.log(chalk.blue("RULES OF THE GAME ARE : YOU HAVE TO GIVE ATLEAST THREE(3) CORRECT ANSWER TO ENTER THE NEXT LEVEL"))


function play(question,answer)
{
  var useranswer = readlineSync.question(question);

  if (useranswer === answer)
  {
    console.log(chalk.green("you are right ! "))
    score = score + 1;
  }
  else
  {
    console.log(chalk.red("you are wrong ! "))
  }
  console.log("your current score is " + score)
  console.log("*************************************")
}

var qlevel1 = [{
  question : `1.) Which actor won the oscar in year 2020 ?

  a : Joaquin Phoenix
  b : Johnny Depp
  c : Tom Cruise  ` ,
  answer : "a"
} , {
  question : `2.) Which movie franchise is based on the novel written by the author J.K. Rowling ? 

a : hobbit 
b : avengers
c : harry potter ` , 
  answer : "c"} , {
  question : `3.) Which movie franchise has won the most no. of oscar awards ?

  a : james bond series
  b : star wars series
  c : lord of the rings series ` ,
  answer : "c"  
} , {
  question : `4.) Highest grossing movie of all time ?

  a : avengers endgame
  b : avatar
  c : titanic ` ,
  answer : "a"
} ];

var qlevel2 = [ {
  question : `5.) Which is the highest grossing movie franchise ?
  
  a : marvel cinematic universe
  b : dc extended universe
  c : pirates of the caribean ` ,
  answer : "a"
} , {
  question : `6.) Which movie has the highest rating on imdb ? 

  a : forest gump
  b : the shawshank redemption
  c : the godfather ` ,
  answer : "b"
} , {
  question : `7.) Which actor holds the guinness world record for starring in a series of movies with the same role ? 

  a : robert downey junior/iron man
  b : hugh jackman/wolverine/logan
  c : tobey maguire/spiderman ` ,
  answer : "b"
} , {
  question : `8.) Which is the highest grossing animated movie ? 
  
  a : frozen 2
  b : toy story 4
  c : minions ` ,
  answer : "a"
}]

function levelUp()
{
	level1();
    if (score >= 3)
    {
      console.log(chalk.magentaBright("CONGRATS YOU HAVE ENTERED LEVEL2"))
	  } else if(score<3)  
    {
	  console.log(chalk.redBright("SORRY YOU HAVE TO TRY AGAIN"))
	  
	  level1();
    score = x;
    }
}
  
 function level2()
 {
    for (var i=0 ; i<qlevel2.length; i++)
    {
    play(qlevel2[i].question, qlevel2[i].answer)
    }
 }
 function level1()
 {
    for (var i=0 ; i<qlevel1.length; i++){
    play(qlevel1[i].question, qlevel1[i].answer)
    }
 }

for (;;)
{
	levelUp();
	if(score>=3)
  {
	break;
	}
}
level2();

var highScore = 
 {
     name: "devanshu",
     highscore: "8"
 }

 var userScore =
   {
     name: userName,
     highscore: score
   } ;

 if (userScore.highscore == highScore.highscore)
 {
   console.log("CONGRATULATIONS ! YOU HAVE BEATEN THE HIGH SCORE")
 } 

console.log(chalk.yellowBright("THANKS " + userName +" FOR PLAYING THE QUIZ "))
console.log ("YOUR FINAL SCORE IS:",score)
