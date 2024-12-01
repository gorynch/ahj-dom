import image from "../../img/goblin.png";

export class Goblin {
  constructor() {
    this._element = document.createElement("img");
    this._element.classList.add("goblin");
    this._element.src = image;
  }

  moveToAnotherCell(cells) {
    const cellIndex = Math.floor(Math.random() * cells.length);

    cells[cellIndex].appendChild(this._element);
  }
}
