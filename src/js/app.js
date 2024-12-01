import { Board } from "./board/board";
import { Goblin } from "./goblin/goblin";

document.addEventListener("DOMContentLoaded", () => {
  const board = new Board(document.querySelector(".board"));
  board.drawCells();

  const goblin = new Goblin();
  goblin.moveToAnotherCell(board.cells);

  setInterval(() => {
    goblin.moveToAnotherCell(board.cells);
  }, 1000);
});
