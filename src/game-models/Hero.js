const {
  checkUserName,
  addUser,
  updateUserScore,
  getScores,
  getTop5,
} = require("../index");
const Boomerang = require("./Boomerang");

class Hero {
  constructor(boomerang, position) {
    this.skin = "🧙‍♂️"; // можете использовать любые emoji '💃'
    this.position = position;
    this.boomerang = boomerang;
  }

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
      if (score > (await getScores(name))) await updateUserScore(score, name);
    } else {
      await addUser(name, score);
    }
    console.log(`\nWASTED!!!💀 ${name} KILLED ${score} ENEMIES!!\n`);
    console.log('Топ 5 игроков:\n');
    console.log(await getTop5());
    process.exit();
  }
}

module.exports = Hero;
