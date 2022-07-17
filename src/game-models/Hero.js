const { checkUserName, addUser, updateUserScore } = require("../index");
const Boomerang = require("./Boomerang");

class Hero {
  constructor(boomerang, position) {
    this.skin = "🤠"; // можете использовать любые emoji '💃'
    this.position = position;
    this.boomerang = boomerang;
  }
  updateUserScore;

  moveLeft() {
    // Идём влево.
    if (this.position > 0) this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang = new Boomerang(this.position + 1);
    this.boomerang.fly();
  }

  async die(name, score) {
    this.skin = "💀";
    if (await checkUserName(name)) {
      await updateUserScore(score, name);
    } else {
      await addUser(name, score);
    }
    console.log(`YOU ARE DEAD!💀 ${name} KILLED ${score} ENEMIES!!`);
    process.exit();
  }
}

module.exports = Hero;
