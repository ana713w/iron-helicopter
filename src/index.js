const ctx = document.getElementById('canvas').getContext('2d')

const game = new Game(ctx)

game.start()

document.addEventListener('keydown', (event) => {
  game.onKeyDownEvent(event.keyCode);
})

document.addEventListener('keyup', (event) => {
  game.onKeyUpEvent(event.keyCode);
})
