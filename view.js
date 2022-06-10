import { convertsCordsToString, getCordsFromString } from './utilis.js';

class View {
  fields = document.querySelectorAll('.field');
  board = document.querySelector('.main');
  game = null;

  initView() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const div = document.createElement('div');
        div.classList.add('field');
        div.dataset.index = convertsCordsToString(i, j);
        this.board.appendChild(div);
      }
    }
    this.attachEvents();
  }

  attachGameInstance(game) {
    this.game = game;
  }
  attachEvents() {
    this.board.addEventListener('click', (e) => {
      const [x, y] = getCordsFromString(e.target.dataset.index);
      this.game.onFieldClick(x, y);
    });
  }

  drawMarkOnCell(mark, x, y) {
    this.getHtmlElementFromCords(x, y).textContent = mark;
  }

  getHtmlElementFromCords(x, y) {
    return this.board.querySelector(
      `[data-index="${convertsCordsToString(x, y)}"]`
    );
  }

  setActivePlayer(activePlayer) {
    document.querySelector(
      '#activePlayer'
    ).textContent = ` Player ${activePlayer}`;
  }
  
}

export const view = new View();
