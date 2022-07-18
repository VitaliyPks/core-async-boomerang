// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const runInteractiveConsole = require("./keyboard");
const Hero = require("./game-models/Hero");
const Enemy = require("./game-models/Enemy");
const View = require("./View");
const Boomerang = require("./game-models/Boomerang");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero(new Boomerang(), 0); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    this.view = new View();
    this.track = [];
    this.time = 300;
    this.score = 0;
    this.speedEnemy = 0;
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(" ");
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.hero.position] = this.hero.skin;
    if (this.hero.position < this.hero.boomerang.position)
      this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
  }

  check() {
    if (
      this.hero.position === this.enemy.position ||
      this.hero.position > this.enemy.position
    ) {
      this.die = true;
      this.hero.die(this.name, this.score);
    }
    if (this.hero.boomerang.position - 2 === this.enemy.position - 4)
      this.enemy.skin = "💥";
    if (
      this.enemy.position === this.hero.boomerang.position ||
      this.hero.boomerang.position > this.enemy.position
    ) {
      this.enemy.die();
      this.dieEnemy = true;
      this.hero.boomerang.course = false;
      this.score += 1;
      this.enemy.generateSkin();
      this.enemy.position = 29;
    }
  }

  registr() {
    return new Promise((res) => {
      rl.question("Введите имя:", (answer) => res(answer));
    });
  }

  async moveEnemy() {
    this.speedEnemy = setInterval(() => {
      this.enemy.moveLeft();
    }, this.time);
  }

  async play() {
    this.name = await this.registr();
    runInteractiveConsole(this.hero);
    this.moveEnemy();
    const interval = setInterval(() => {
      // Let's play!
      this.check();
      if (this.dieEnemy) {
        clearInterval(this.speedEnemy);
        if (this.time > 50) this.time -= 20;
        this.dieEnemy = false;
        this.moveEnemy();
      }
      if (this.die) clearInterval(interval);
      this.regenerateTrack();
      this.view.render(this.track, this.score, this.name, this.trackLength);
    }, 42);
  }
}
module.exports = Game;
