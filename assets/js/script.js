var introduction = document.getElementById("intro");
var startButton = document.getElementsByClassName("start-button");
var quizOutline = document.getElementById("quiz-format");
var quizTimer = document.getElementById("timer");
var questionsEl = document.getElementById("quiz-question");
var score = document.getElementById("total-score");
var finalPage = document.getElementById("score-submit");
var InitialsPlayers = document.getElementById("playerInitials");
var submitBtn = document.getElementById("submitButton");
var playerSores = document.getElementById("final-screen");
var playersFinalScore = document.getElementById("highscore-results");
var playerInitialScores = document.getElementById("initials-highscore");
var goButton = document.getElementById("go-back");
var clearBtn = document.getElementById("clear-score");
var aButton = document.getElementById("a");
var bButton = document.getElementById("b");
var cButton = document.getElementById("c");
var dButton = document.getElementById("d");

//another way to set up questions based on what I found online
var myQuestions = [
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers : {
            a: 'Javascript',
            b: 'terminal/bash',
            c: 'for loop',
            d: 'console.log'
        },
        correctAnswer: 'b'
    }
];

function generateQuiz(question, quizOutline, playersFinalScore, submitBtn, startButton){
    
    function showQuestions(question, quizOutline){
        var output = [];
        var answers;

        for(var i=0; i<question.length; i++){
            answers=[];
            for(letter in question[i].answers){
                answers.push(
                    '<label>'+'<input type="radio" name="questions' +i+'"value="'+letter+'">'+letter+': '
                    + question[i].answers[letter]+'</label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
        }
        quizContainer.innerHTML = output.join('');
    }
}
//showQuestions(question,quizOutline);
