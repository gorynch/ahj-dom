import image from "../../img/goblin.png";

export class Goblin {
  constructor() {
    this._element = document.createElement("img");
    this._element.classList.add("goblin");
    this._element.src = image;
  }

  moveToAnotherCell(cells) {
    let cellIndex = Math.floor(Math.random() * cells.length);
    while (cells[cellIndex].children.length != 0) {
      cellIndex = Math.floor(Math.random() * cells.length);
    }

    cells[cellIndex].appendChild(this._element);
  }
}
