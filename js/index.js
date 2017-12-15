$(document).ready(function() {
  
var playerTurn = true;
var compTurn = false;
var gameOver = false;
var numMoves = 0;
  //Function to switch turns
function changeTurn() {
  if(playerTurn === true) {
    playerTurn = false;
    compTurn = true;
  } else {
    playerTurn = true;
    compTurn = false;
  }
};
  
var playerSym = "X";
var compSym = "O";
var boardArr = 
    ["", "", "", 
     "", "", "", 
     "", "", "",]

//Function to clear the board
function reset() {
  boardArr = 
    ["", "", "", 
     "", "", "", 
     "", "", "",]
  $(".box").html("");
  gameOver = false;
  numMoves = 0;
  playerTurn = true;
  compTurn = false;
}
  //Check to see if a win condition is met
  function wonMessage() {
    if (playerTurn === true) {
      alert("Congratulations! You won!");
      gameOver = true;
    } else {
      alert("Computer wins, Try again!");
      gameOver = true;
    }
  };
  function checkWon(symbol){
    if(boardArr[0] === boardArr[1] && boardArr[1] === boardArr[2] && boardArr[2] === symbol) {
      wonMessage();
    } else if (boardArr[3] === boardArr[4] && boardArr[4] === boardArr[5] && boardArr[5] === symbol) {
      wonMessage();
    } else if (boardArr[6] === boardArr[7] && boardArr[7] === boardArr[8] && boardArr[8] === symbol) {
      wonMessage();
    } else if (boardArr[0] === boardArr[3] && boardArr[3] === boardArr[6] && boardArr[6] === symbol) {
      wonMessage();
    } else if (boardArr[1] === boardArr[4] && boardArr[4] === boardArr[7] && boardArr[7] === symbol) {
      wonMessage();
    } else if (boardArr[2] === boardArr[5] && boardArr[5] === boardArr[8] && boardArr[8] === symbol) {
      wonMessage();
    } else if (boardArr[0] === boardArr[4] && boardArr[4] === boardArr[8] && boardArr[8] === symbol) {
      wonMessage();
    } else if (boardArr[2] === boardArr[4] && boardArr[4] === boardArr[6] && boardArr[6] ===symbol) {
      wonMessage();
    } else if (numMoves === 9)  {
      alert("No available moves left! Try again!")
    }
  };

//Function to make a move
function makeMove(spot, symbol){
  if (gameOver === true) {
    alert("Game is already over! Get ready for a new one!");
    reset();
  } else if(boardArr[spot] === "") {
  boardArr[spot] = symbol;
  $("#" + spot).html(symbol);
  numMoves ++;
  checkWon(symbol);
  changeTurn();
  } 
};

$(".switchBtn").on("click",function(){
     if (playerSym === "X") {
       playerSym = "O";
       compSym = "X";
       $(this).html("I want to play X");
     } else {
       playerSym = "X";
       compSym = "O";
       $(this).html("I want to play O");
     }               
});
  
$(".box").on("click",function(){
  var space = this.id;
  if (playerTurn === true) {
    makeMove(space, playerSym);
    var waitTime = setTimeout(compMove(), 1000);
  } else {
    alert("Please wait your turn");
    compMove();
  }  
});

  function compMove() {
    while (compTurn === true && gameOver === false) {
      var move = (Math.random() * 10).toFixed();
      makeMove(move, compSym);
    }
  };
  
  $("#reset").on("click", function(){
    reset();
  });
  
  //End of program
});

//Note: You can "Cheat" this game by clicking the switch button to change to the other symbol at the end of the game to beat the computer. This is a personal choice to leave this in the code, as it's exactly the kind of cheat I would have used on a game like this as a child.