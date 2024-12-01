import { Board } from "./board";

describe("class Board", () => {
  test("new Board()", () => {
    const element = document.querySelector(".board");

    const board = new Board(element);

    expect(board._element).toEqual(element);
    expect(board._size).toBe(4);
  });
});
