import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 5
const snakeBody = [{ x: 11, y: 11 }]
let newSegments = 0

export function update(){
    addSegments()

    const inputDirection = getInputDirection()
    for (let i = snakeBody.lenght - 2; i >= 0; i--) { // We ignore last snake element
        snakeBody[i + 1] = { ...snakeBody[i] }// Last element is going to be equal to current element
    }
    // Update head based on where we are moving
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
      const snakeElement = document.createElement('div')
      snakeElement.style.gridRowStart = segment.y
      snakeElement.style.gridColumnStart = segment.x
      snakeElement.classList.add('snake')
      gameBoard.appendChild(snakeElement)
    })
  }

  export function expandSnake(amount){
    newSegments += amount
  }

  export function onSnake(position, { ignoreHead = false} = {}) {
      return snakeBody.some((segment, index) => {
          if(ignoreHead && index === 0) return false
          return equalPositions(segment, position)
      })
  }

  function equalPositions(pos1, pos2){
      return pos1.x === pos2.x && pos1.y === pos2.y
  }

  function addSegments() {
    for (let i = 0; i < newSegments; i++) { // For each of our new body segments
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] }) // One more index than our current snake lenght
    } //Append to the end "Here we are taking the last element of the snake and duplicating that to the end of the snake"
      // For example if our snake was currently one position it will duplicate that one position  
    newSegments = 0
}   

export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], {ignoreHead: true})
}