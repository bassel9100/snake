let lastRenderTime = 0
const SNAKE_SPEED = 2

console.log('Hey');

function main(currentTime){
    const secondsSinceLastRender = (currenTime - lastRenderTime) / 1000
    window.requestAnimationFrame(main) /* asks the browser when it can render the frame */
    lastRenderTime = currentTime
    console.log(currentTime)
}

window.requestAnimationFrame(main)
console.log('Hey')