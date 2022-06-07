import { view } from './view.js';
import { Players } from './constants.js';
import { convertsCordsToString, getCordsFromString } from './utilitis.js';

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
    }
  }
  attachFieldToPlayer(x, y) {
    this.gameBoard[convertsCordsToString(x, y)] = this.activePlayer;
  }
}

export const game = new Game();
