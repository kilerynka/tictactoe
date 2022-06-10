import { view } from './view.js';
import { Players } from './constants.js';
import { convertsCordsToString, getCordsFromString } from './utilis.js';

class Game {
  activePlayer = Players.playerX;
  gameBoard = {};

  init() {
    view.initView();
    view.attachGameInstance(this);
    view.setActivePlayer(this.activePlayer);
  }
  onFieldClick(x, y) {
    if (!this.gameBoard[convertsCordsToString(x, y)]) {
      view.drawMarkOnCell(this.activePlayer, x, y);
      this.attachFieldToPlayer(x, y);
      this.activePlayer =
        this.activePlayer === Players.playerX
          ? Players.playerY
          : Players.playerX;
      view.setActivePlayer(this.activePlayer);
      this.checkWinningConditions()
    }
  }
  attachFieldToPlayer(x, y) {
    this.gameBoard[convertsCordsToString(x, y)] = this.activePlayer;
  }
  checkWinningConditions(x,y) {
    console.log(this.gameBoard)
    this.compareFields()
  }
  compareFields(x,y) {
    let cordsString = convertsCordsToString(x,y); 
    let fields = document.querySelectorAll(".field")
    console.log(fields[0].textContent)
    for(let i=0; i<fields.length;i++) {
      if(fields[0].textContent === "x" && fields[1].textContent === "x" && fields[2].textContent === "x") {
        console.log("win1")
      } else if (fields[3].textContent === "x" && fields[4].textContent === "x" && fields[5].textContent === "x") {
        console.log('win2')
      } else if (fields[6].textContent === "x" && fields[7].textContent === "x" && fields[8].textContent === "x") {
        console.log("win3")
      }
    }
  }
}

export const game = new Game();
