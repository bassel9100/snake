import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
const EXPANSION_RATE = 5

export function update(){
    if(onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition() // Update food position
    }
}

export function draw(gameBoard) {
      const foodElement = document.createElement('div')
      foodElement.style.gridRowStart = food.y
      foodElement.style.gridColumnStart = food.x
      foodElement.classList.add('food')
      gameBoard.appendChild(foodElement)
  }

function getRandomFoodPosition() {
    let newFoodPosition // Whenever we are not on the snake or the food is null
    while(newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}