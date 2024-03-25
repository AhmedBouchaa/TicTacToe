var Board = document.querySelectorAll("input[type='button']");
var LogicBoard = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
var Joueur = "X";
var IsFinished = false;
function tour(index) {
  if (IsFinished) {
    return;
  }
  Board[index - 1].value = Joueur;
  Board[index - 1].disabled = "disabled";
  LogicBoard[index - 1] = Joueur;
  console.log(LogicBoard);
  CheckWinner();
  Joueur = Joueur == "O" ? "X" : "O";

  document.getElementById("joueur").textContent = Joueur;
}

function CheckWinner() {
  if (
    (LogicBoard[0] == LogicBoard[1] && LogicBoard[1] == LogicBoard[2]) ||
    (LogicBoard[3] == LogicBoard[4] && LogicBoard[4] == LogicBoard[5]) ||
    (LogicBoard[6] == LogicBoard[7] && LogicBoard[7] == LogicBoard[8]) ||
    (LogicBoard[0] == LogicBoard[3] && LogicBoard[3] == LogicBoard[6]) ||
    (LogicBoard[1] == LogicBoard[4] && LogicBoard[4] == LogicBoard[7]) ||
    (LogicBoard[2] == LogicBoard[5] && LogicBoard[5] == LogicBoard[8]) ||
    (LogicBoard[0] == LogicBoard[4] && LogicBoard[4] == LogicBoard[8]) ||
    (LogicBoard[2] == LogicBoard[4] && LogicBoard[4] == LogicBoard[6])
  ) {
    alertify.alert(Joueur + " a gagne!!");
    document.getElementById("theheadertext").innerHTML = Joueur + " a gagne!!";
    IsFinished = true;
  } else {
    if (!CheckSpace()) {
      alertify.alert("Aucun a gagne .");
      document.getElementById("theheadertext").innerHTML = "Aucun a gagne .";
      IsFinished = true;
    }
  }
}

function CheckSpace() {
  for (Element of LogicBoard) {
    if (!isNaN(Element)) {
      return true;
    }
  }
  return false;
}

function rejouer() {
  LogicBoard = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  for (Element of Board) {
    Element.value = " ";
    Element.removeAttribute("disabled");
  }
  Joueur = "X";
  IsFinished = false;
  document.getElementById("theheadertext").innerHTML =
    "le tour de <span id='joueur'>X</span>";
}
