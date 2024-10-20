class Helicopter {
  constructor(ctx) {
    this.ctx = ctx;
    this.tick = 0;

    this.x = 100;
    this.y = 0;

    this.w = 100;
    this.h = 40;

    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.ay = 0;
    this.ax = 0;
    this.g = 0.05;

    this.img = new Image();
    this.img.src =
      "https://2.bp.blogspot.com/-P6ZbLE-rnFM/WPTQh65UtMI/AAAAAAAABF8/9iYl-cIUEtIhj2JDTixyqZNeBn183AdmQCLcB/s1600/helicopter-spritesheet.png";
    this.img.frames = 4;
    this.img.frameIndex = 0;

    this.weapon = new Weapon(this);
  }

  draw() {
    // TODO: draw helicopter image
    this.ctx.drawImage(
      this.img,
      0,
      (this.img.frameIndex / this.img.frames) * this.img.height,
      this.img.width,
      (1 / this.img.frames) * this.img.width,
      this.x,
      this.y,
      this.w,
      this.h
    )

    this.weapon.draw();
  }

  isFloor() {
    // TODO: check if floor
    return this.y + this.h >= this.ctx.canvas.height;
  }

  move() {
    // TODO: move
    this.vy += this.ay + this.g;
    this.vx += this.ax;

    this.x += this.vx;
    this.y += this.vy;

    if (this.isFloor()) {
      this.vy = 0;
      this.g = 0;
      console.log("Tocado");
    }

    if(this.ay === 0) {
      this.img.frameIndex = 0;
    } else {
      this.tick ++;
      if(this.tick > 10) {
        this.tick = 0;
        this.img.frameIndex++
        if (this.img.frameIndex >= this.img.frames) { 
          this.img.frameIndex = 0;
      }
    }

    }
  }

  onKeyDownEvent(event) {
    // TODO
    switch (event) {
      case UP:
        this.ay = -0.1;
        break;
      case RIGHT:
        this.ax = 0.05;
        break;
      case LEFT:
        this.ax = -0.05;
        break;
    }
  }

  onKeyUpEvent(event) {
    switch (event) {
      case UP:
        this.ay = 0;
        break;
    }
  }
}
