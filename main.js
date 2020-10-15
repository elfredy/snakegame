import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";

import { update as updateFood, draw as drawFood } from "./food.js";

import { outsideGrid } from "./grid.js";
let lastRenderTime = 0;
let gameOver = false;
var num = 0;
const gameBoard = document.getElementById("game-board");



function main(currentTime) {
  if (gameOver) {
    if (confirm('You Lost!! Click "Ok" and restrart')) {
      window.location = "/";
    }
    return;
  }
  window.requestAnimationFrame(main);
  const secondSienceLastRender = (currentTime - lastRenderTime) / 1000;

  if (secondSienceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
  
}
function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
  
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}



