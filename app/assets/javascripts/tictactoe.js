// Code your JavaScript / jQuery solution here
const  winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
let turn = 0;
let currentGame;

$(() => {
  attachListeners();
})

const attachListeners = () => {
  $('td').click(function () {
    doTurn($(this).data('x'), $(this).data('y'));
  });
  $('#previous').click(() => {
    getAllGames();
  });
  $('#save').click(() => {
    saveGame();
  });
}

function player() {
  if (turn % 2 === 0) {
    return 'X';
  } else {
    return 'O';
  }
}

function updateState (x,y) {
  $('[data-x=${x}][data-y=${y}]').html(player())
}

function setMessage (message) {
  $('#message').html(message);
}

function checkWinner() {
  let winner = false;
  let board = checkBoard ();
  winningCombos.forEach(function(position) {
    if (board[position[0]] === board[position[1]] && board[position[1]] === board[position[2]] && board[position[0]] !== ""){
      winner = true;
    }
  })
  if (winner === true) {
    message(`Player ${player()} Won!`);
    resetBoard();
  } else if (turn === 8) {
    message('Tie game');
    resetBoard();
  } else {
    return false;
  }
}

function doTurn() {
  updateState(x,y);
  checkWinner();
  turn += 1;
}
function attachListeners()
