let playerTurn = "O";
let board = ["", "", "", "", "", "", "", "", ""];

function handleTileClick(tileNum) {
  console.log(playerTurn, " Tile Clicked ", tileNum);

  if (playerTurn === "O") {
    board[tileNum] = "O";
    checkWinner(playerTurn);
    playerTurn = "X";
  } else {
    board[tileNum] = "X";
    checkWinner(playerTurn);
    playerTurn = "O";
  }
  console.log(board);
  updateTiles();
}

function updateTiles() {
  for (let i = 0; i < board.length; i++) {
    let tile = document.getElementById("tile-" + i);
    tile.innerText = board[i];
  }
}

let wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner(playerTurn) {
  wins.forEach((pattern) => {
    let count = 0;
    pattern.forEach((pos) => {
      if (board[pos] === playerTurn) {
        count++;
      }
    });
    if (count === 3) {
      winningMessage(playerTurn);
    }
  });
}

function winningMessage(playerTurn) {
  let title = document.getElementById("title");
  title.innerText = playerTurn + " is the winner!";
}
