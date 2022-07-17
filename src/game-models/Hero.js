
const Boomerang = require("./Boomerang");

class Hero {
  constructor(boomerang, position) {
    this.skin = "🤠"; // можете использовать любые emoji '💃'
    this.position = position;
    this.boomerang = boomerang;
  }

  moveLeft() {
    // Идём влево.
    if (this.position > 0) this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    if(this.position < 30)this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang = new Boomerang(this.position + 1);
    this.boomerang.fly();
  }

  die(name, score) {
    this.skin = "💀";
    console.log(YOU ARE DEAD!💀 ${name} KILLED ${score} ENEMIES!!);
    process.exit();
  }
}

module.exports = Hero;