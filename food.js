import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";
let food = getRandomFoodPosition();

const EXPANSİON_RATE = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSİON_RATE);
    food = getRandomFoodPosition();
    gamePoint();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;

  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }

  return newFoodPosition;
}

//const button = document.getElementById("button");
const input = document.getElementById("input");
let index = 0;
function gamePoint() {
  index += 5;
  input.value = index;
}


/* 
button.addEventListener("click", () => {
  index += 5;
  input.value = index;
}); */

/* function hesabla() {
  
} */
