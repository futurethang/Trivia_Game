var triviaQuestions = {
    "response_code":0,
    "results":[
       {
          "category":"Animals",
          "type":"boolean",
          "difficulty":"medium",
          "question":"An octopus can fit through any hole larger than its beak.",
          "correct_answer":"True",
          "incorrect_answers":[
             "False"
          ]
       },
       {
          "category":"Entertainment: Film",
          "type":"multiple",
          "difficulty":"medium",
          "question":"What is the name of James Dean&#039;s character in the 1955 movie &quot;Rebel Without a Cause&quot;?",
          "correct_answer":"Jim Stark",
          "incorrect_answers":[
             "Ned Stark",
             "Jim Kane",
             "Frank Stark"
          ]
       },
       {
          "category":"Celebrities",
          "type":"multiple",
          "difficulty":"medium",
          "question":"Paul McCartney has always used his middle name. What is his real first name? ",
          "correct_answer":"James",
          "incorrect_answers":[
             "John",
             "Jack",
             "Justin"
          ]
       },
       {
          "category":"Entertainment: Video Games",
          "type":"multiple",
          "difficulty":"medium",
          "question":"Which puzzle game was designed by a Russian programmer, featuring Russian buildings and music?",
          "correct_answer":"Tetris",
          "incorrect_answers":[
             "Jenga",
             "Boulder Dash",
             "Puzzled"
          ]
       },
       {
          "category":"Science: Mathematics",
          "type":"multiple",
          "difficulty":"medium",
          "question":"What Greek letter is used to signify summation?",
          "correct_answer":"Sigma",
          "incorrect_answers":[
             "Delta",
             "Alpha",
             "Omega"
          ]
       },
       {
          "category":"Entertainment: Video Games",
          "type":"multiple",
          "difficulty":"medium",
          "question":"What is the first primary weapon the player gets in &quot;PAYDAY: The Heist&quot;?",
          "correct_answer":"AMCAR-4",
          "incorrect_answers":[
             "Brenner 21",
             "Reinbeck",
             "M308"
          ]
       },
       {
          "category":"General Knowledge",
          "type":"multiple",
          "difficulty":"medium",
          "question":"In what year was McDonald&#039;s founded?",
          "correct_answer":"1955",
          "incorrect_answers":[
             "1964",
             "1951",
             "1947"
          ]
       },
       {
          "category":"Entertainment: Cartoon & Animations",
          "type":"multiple",
          "difficulty":"medium",
          "question":"Adam West was the mayor of which cartoon town?",
          "correct_answer":"Quahog",
          "incorrect_answers":[
             "Springfield",
             "South Park",
             "Langley Falls"
          ]
       },
       {
          "category":"General Knowledge",
          "type":"multiple",
          "difficulty":"medium",
          "question":"In a 1994 CBS interview, Microsoft co-founder Bill Gates performed what unusual trick on camera?",
          "correct_answer":"Jumping over an office chair",
          "incorrect_answers":[
             "Jumping backwards over a desk",
             "Standing on his head",
             "Typing on a keyboard during a handstand"
          ]
       },
       {
          "category":"Science: Computers",
          "type":"multiple",
          "difficulty":"medium",
          "question":"Approximately how many Apple I personal computers were created?",
          "correct_answer":"200",
          "incorrect_answers":[
             "100",
             "500",
             "1000"
          ]
       }
    ]
 }
 
var question = triviaQuestions.results;

console.log(question);


// $(function () {
   
// });

// PRIMARY GAME ELEMENTS:

// A TRIVIA CARD OBJECT

// A TRIVIA QUESTIONS OBJECT, EITHER FOR ALL MANUAL Q/A's OR PARSED FROM JSON API

// A TIMER FUNCTION THAT CANCELS IF SUBMITTED, PENALIZES IF RUNS DOWN

// A PRE-GAME PAGE W/ START BUTTON, A GAME-OVER PAGE FOR TIMER EXPIRE, A GAME SUMMARY PAGE FOR FINISH

// A HELPER FUNCTION THAT POPULATES MULTIPLE CHOICE ANSWERS TO OPTION SPACES AND SETS LISTENERS

// A HELPER FUNCTON THAT RANDOMLY SETS UP THE NEW QUESTION AND CALLS THE ANSWERS OPTIONS FUNCTION

// AN OBJECT TO TRACK CORRECT AND INCORRECT ANSWERS BEHIND THE SCENES

// A FUNCTION TO TALLY THE END GAME FOR FINAL SCORE DISPLAY AT THE END


// TRIVA Q/A OBJECT FOR REFERENCE

// GAME OBJECT TO TRACK ANSWERS AND WINS/LOSSES

// PERHAPS A CURRENT QUESTION OBJECT THAT CHANGES EACH ROUND?



// DEFINE HTML ELEMENT VARIABLES

var $header = $(".header");
var $questionDiv = $("#question");
var $option1Div = $("#option_1");
var $option2Div = $("#option_2");
var $option3Div = $("#option_3");
var $option4Div = $("#option_4");
var $timerDiv = $("#timer");
// element to track how many questions asked and remaining "4/10"

function startScreen() { // INITIALIZE THE GAME AND PRINT A WELCOME MESSAGE, WAIT FOR START
    
}

function newTimer() { // BEGINS A NEW COUNTDOWN TIMER FOR EACH QUESTION, CALLED UPON QUESTION INITIALIZATION

}

function newQuestion() { // PULLS AND PRINTS A NEW QUESTION TO THE CURRENT VIEW, SEND THE ANSWERS TO THE OPTIONS FUNCTION

}

function timeOut() { // END FUNTION CALLED WHEN THE TIME RUNS DOWN
    // this might be better as a conditional inside the newtimer?
}

function gameEnd() { // TALLIES UP THE SCORE FROM THE GAME OBJECT, PRINTS RESULTS AND INCREMENTS WIN/LOSS

}

function testFunction(input) {
    $questionDiv.text(JSON.parse(input));
}

var game = {
    currentQuestion: "",
}

// $.ajax({
//     type: "GET",
//     url: "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",
//     success: function (response) {
//         $questionDiv.text(response);
//     }
// });
// var triviaQuestions;


// $.ajax({
//     url: "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",
//     method: "GET",
//     dataType: "json",
//     success: function (response) {
//         triviaQuestions = response;
//     }
// });
// $questionDiv.text(triviaQuestions.results[0].question);
// console.log(response);
// $option1Div.text("testing");


// this isn't working BUT prehaps I can make my ajax call for each question, increment up the results indices
// var triviaQuestions;
// $(function () {
//     $.ajax({
//         url: "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",
//         method: "GET",
//         async: true
//       }).then(function(response) {
//         triviaQuestions.push(response);
//         game.currentQuestion = response.results[0].question;
//         // testFunction(response);
//         console.log(triviaQuestions)
        
//       });
// });
// console.log(triviaQuestions)
// $questionDiv.text(game.currentQuestion)


// function printAjax(domTarget, dataTarget, array, correctA) { // this works well but gets a new question each function call.
//     $.ajax({
//         url: "https://opentdb.com/api.php?amount=1",
//         method: "GET"
//     }).then(function(data) {
//         domTarget.text(data.results[0][dataTarget]);
//         console.log(data);
//         correctA = data.results[0].correct_answer;
//         array.push(data.results[0].correct_answer);
//         for (var i ; i < data.results[0].incorrect_answers.length ; i++) {
//             array.push(i);
//         }
//     })
// }



// printAjax($questionDiv, "question", answers, correct);
// console.log(answers, correct);
// printAjax($option1Div, "correct_answer");
// var currentQuestion;

// function storeQuestion(object) {
//     $.ajax({
//         url: "https://opentdb.com/api.php?amount=1",
//         method: "GET"
//     }).then(function(data) {
//         object = data.results;
//     })
// }
// function currentQuestion()

// function compileAnswers() {

// }
function writeOptions() {
    for (var i = 0 ; i < answers.length ; i++ ) {
        $(".answers").append("<div class='option' id='option_" + (i+1) + "'><h3>"+ answers[i] + "</h3></div>");
    }
}

var answers = [];
var correct = "";
var userAnswer = ""

function grabQandA(gameRound) {
    answers.push(question[gameRound].correct_answer);
    correct = question[gameRound].correct_answer;
    for (var i = 0 ; i < question[gameRound].incorrect_answers.length ; i++) {
        answers.push(question[gameRound].incorrect_answers[i]);
        console.log(question[gameRound].incorrect_answers[i]);
    }
    $questionDiv.html(question[gameRound].question);
    writeOptions();
    $(".option").on("click", function() {
        userAnswer = $(this).text();
        if (userAnswer === correct) {
            alert("CORRECT!");
        } else {alert("WRONG!")}
        
    })
    setInterval(function(){
      alert("TIMES UP");
    }, 11000)
}


grabQandA(5);

var timeleft = 10;
var downloadTimer = setInterval(function(){
  document.getElementById("progressBar").value = 10 - --timeleft;
  if(timeleft <= 0)
    // alert("Time's Up!");
    clearInterval(downloadTimer);
},1000);

