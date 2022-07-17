// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const runInteractiveConsole = require("./keyboard");
const Hero = require("./game-models/Hero");
const Enemy = require("./game-models/Enemy");
const View = require("./View");
const Boomerang = require("./game-models/Boomerang");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("boomerang", "Vitaliy", "1123", {
  host: "localhost",
  dialect: "postgres",
});

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero(new Boomerang(), 0); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    this.view = new View();
    // this.boomerang = new Boomerang();
    this.track = [];
    this.score = 0;
    this.regenerateTrack();
  }

  checkUserName(){
    
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(" ");
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    if (this.hero.position < this.hero.boomerang.position)
      this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
    if (
      this.enemy.position === this.hero.boomerang.position ||
      this.hero.boomerang.position + 1 === this.enemy.position
    ) {
      this.enemy.die();
      this.hero.boomerang.course = false;
      this.score += 1;
      this.enemy.generateSkin();
      this.enemy.position = 29;
    }
  }

  play() {
    runInteractiveConsole(this.hero);
    setInterval(() => {
      this.enemy.moveLeft();
    }, 300);
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track, this.score);
    }, 42);
  }
}

module.exports = Game;
