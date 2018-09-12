// DEFINE HTML ELEMENT VARIABLES

var $header = $(".header");
var $questionDiv = $("#question");
var $timerDiv = $("#timer");
var $correct = $("#overlay_correct");
var $incorrect = $("#overlay_incorrect");
var $timesUp = $("#overlay_timesUp");

// GAME OBJECTS FOR REFERNCE AND GAME PLAY
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

var game = {
    "round": 0,
    "numberCorrect": [],
    "numberIncorrect": [],
}

// HELPER FUNCTIONS
var timer;
function timerFunc() {
    var timeleft = 10;
    timer = setInterval(function(){
      document.getElementById("progressBar").value = 10 - --timeleft;
      if(timeleft <= 0) {
        alert("Time's Up!");
        clearInterval(timer);
        game.numberIncorrect.push(game.round);
        game.round++
        grabQandA(game.round);
      }
    },1000);    
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
function writeQandAs(gameRound) {
    // !! add writing for round counter at the top, "Question 2 of 10"
    $questionDiv.html(question[gameRound].question);
    for (var i = 0 ; i < answers.length ; i++ ) {
        $(".answers").append("<a><div class='option' id='option_" + (i+1) + "'><h3>"+ answers[i] + "</h3></div></a>");
    }
}
function clickListeners(gameRound) {
    $(".option").on("click", function() {
        clearInterval(timer);
        userAnswer = $(this).text();
        if (userAnswer === correct) {
            // toggleOverlay("correct");
            game.numberCorrect.push(gameRound);
        } else {
            // toggleOverlay("incorrect");
            game.numberIncorrect.push(gameRound);
        }
        // INCREMENT UP AND START A NEW ROUND
        game.round++;
        console.log(game);
        grabQandA(game.round);
    })
}
function gameSummary(finalGame) {
    // CLEAR OUT THE DOM, GET RID OF ALL BUT HEADER, FOOTER, AND ANSWER AREA
    $("#question, #timer").remove()
    // DEFINE HTML ELEMENT VARIABLES TO APPEND A LIST OF THE TRIVIA QUESTIONS
    var $summaryTitle = "<h3 class='summary'>You Got " + game.numberCorrect.length + " out of 10 correct</h3>";
    $(".answers").html($summaryTitle);
    for (let i = 0 ; i < question.length ; i++) {        
        var $questionHeader = "<h4 class='summary'>Question Number " + (i+1) + "</h4>";
        var $question = "<p class='summary'>" + question[i].question + "</p>";
        var $correctAnswer = "<span class='summary'><i>The correct answer is :  " + question[i].correct_answer + "</i></span>"
        if (game.numberCorrect.includes(i)) {$correctAnswer = "<span class='summary'><b>" + question[i].correct_answer + "</b></span>"}
        var $summaryChunk = "<div>" + $questionHeader + $question + $correctAnswer + "</div>"
        $(".answers").append($summaryChunk)
    }
}
function toggleOverlay(answer){
    var overlayMessage;
    var overlay = $("#overlay");
    if (answer === "correct") {overlayMessage = $("#overlay_correct")}
    if (answer === "incorrect") {overlayMessage = $("#overlay_incorrect")}
    if (answer === "timesUp") {overlayMessage = $("#overlay_timesUp")}
    overlay.css("opacity", ".8");
    console.log(overlayMessage);
	if(overlay.css("display") == "block"){
		overlay.css("display", "none");
		overlayMessage.css("display", "none");
	} else {
        overlay.css("display", "block");
		overlayMessage.css("display", "block");
	}
}

// VARIABLE FOR EACH QUESTION ROUND
var answers = [];
var correct = "";
var userAnswer = ""


// MAIN ROUND RESET FUNCTION
function grabQandA(gameRound) {
    if (gameRound >= 10) {
        gameSummary(game);
        alert("NO MORE QUESTIONS GO TO SUMMARY"); // DEFINE A GAME-SUMMARY FUNCTION TO CALCULATE AND DISPLAY THE RESULTS
    }

    // CLEAR THE DOM TO PREP FOR NEW QUESTION
    answers = [];
    $(".option").remove();
    $questionDiv.empty();

    // PREPARE ANSWERS ARRAY AND QUESTION FOR DOM PRINT ------ COULD BE A FUNCTION
    correct = question[gameRound].correct_answer;
    answers.push(question[gameRound].correct_answer);
    // ADD INCORRECT ANSWERS TO ANSWER OPTIONS ARRAY
    for (var i = 0 ; i < question[gameRound].incorrect_answers.length ; i++) {
        answers.push(question[gameRound].incorrect_answers[i]);
    }

    // SHUFFLE THE ARRAY
    shuffleArray(answers);

    // WRITE QUESTION AND ANSWER OPTIONS TO DOM
    writeQandAs(gameRound);

    timerFunc();
    //SET UP EVENT LISTENER TO SELECT ANSWERS
    clickListeners(gameRound);

    
    
    
    // setInterval(function(){
    //   alert("TIMES UP");
    // }, 11000)
}

$(function () {
    grabQandA(game.round);
});

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



// element to track how many questions asked and remaining "4/10"