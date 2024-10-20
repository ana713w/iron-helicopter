class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.tick = 0;

    this.bg = new Background(ctx);
    this.helicopter = new Helicopter(ctx);
    this.obstacles = [];
  }

  start() {
    // TODO: loop. clear, draw, move, addObstacle
    this.intervalId = setInterval(() => {
      this.clear ();

      this.draw();

      this.move();

      this.tick++;

      if (this.tick >= 100) {
        this.tick = 0;
        this.addObstacle();
      }
    }, 1000 / 60);
  }

  addObstacle() {
    // TODO: add new Obstacle every 100 ticks

    const newObstacle = new Obstacle(this.ctx);

    this.obstacles.push(newObstacle);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  draw() {
    // TODO: draw everything
    this.bg.draw();
    this.helicopter.draw();
    this.obstacles.forEach((e) => e.draw());
  }

  move() {
    // TODO: move everything
    this.bg.move();
    this.helicopter.move();
    this.obstacles.forEach((e) => e.move());
  }

  onKeyDownEvent(event) {
    // TODO
    this.helicopter.onKeyDownEvent(event);
  }

  onKeyUpEvent(event) {
    // TODO
    this.helicopter.onKeyUpEvent(event);
  }
}
