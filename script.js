'use strict';
// variables
var compScore = 0;
var userScore = 0;
var options = ["snake", "tiger", "eagle"];

$(function () {
  console.log("hello world");
  $("#snake").on("click", function(e) {
    var audioS = new Audio('snake.mp3');
    audioS.play();
    userSelection("snake");
  });

  $("#tiger").on("click", function(e) {
    var audioT = new Audio('tiger.mp3');
    audioT.play();
    userSelection("tiger");
  });

  $("#eagle").on("click", function(e) {
    var audioE = new Audio('eagle.mp3');
    audioE.play();
    userSelection("eagle");
  });

  $("#reset").on("click", function(e) {
    resetGame();
  });
});

function userSelection(target) {
  var compSelection = computerSelection();
  // console.log("comp selection ", computerSelection());
  // console.log("user selection ", target);
  switch (target) {
    case "tiger":
      if (compSelection === "tiger") {
        // tie
        updateResultText("Tie!");
      } else if (compSelection === "snake") {
        // user wins
        userScore+=1;
        updateResultText("You Win!");
      } else if (compSelection === "eagle") {
        // computer wins
        compScore+=1;
        updateResultText("Computer Wins!");
      }
      break;
    case "snake":
      if (compSelection === "tiger") {
        // user wins
        userScore+=1;
        updateResultText("You Win!");
      } else if (compSelection === "snake") {
        // tie
        updateResultText("Tie!");
      } else if (compSelection === "eagle") {
        // comp wins
        compScore+=1;
        updateResultText("Computer Wins!");
      }
      break;
    case "eagle":
      if (compSelection === "tiger") {
        // comp wins
        compScore+=1;
        updateResultText("Computer Wins!");
      } else if (compSelection === "snake") {
        // user wins
        userScore+=1;
        updateResultText("You Win!");
      } else if (compSelection === "eagle") {
        // tie
        updateResultText("Tie!");
      }
      break;
    default:
      console.log("not a valid selection");
  }
}

function computerSelection() {
  return options[Math.floor(Math.random()*4)];
}

function updateResultText(condition) {
  $("#compScore").text(compScore);
  $("#userScore").text(userScore);
  $("#result").text(condition);
}

// reset functionality
function resetGame() {
  location.reload();
}
