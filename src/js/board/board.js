export class Board {
  constructor(element) {
    this._cells = [];
    this._element = element;
    this._size = 4;
  }

  drawCells() {
    this._cells = [];
    this._element.innerHTML = "";
    this._element.style.setProperty("--board-size", this._size);

    for (let index = 0; index < this._size ** 2; index++) {
      const cellElement = document.createElement("div");
      cellElement.classList.add("board__cell");

      this._element.appendChild(cellElement);
      this._cells.push(cellElement);
    }
  }

  get cells() {
    return this._cells;
  }
}
