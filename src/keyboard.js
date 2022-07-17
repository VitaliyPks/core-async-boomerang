// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const Boomerang = require("../src/game-models/Boomerang");
const Hero = require("./game-models/Hero");
const keypress = require("keypress");

class Keyboard {
  constructor() {
    this.hero = new Hero();
    this.boomerang = new Boomerang()
    this.keyboard = {
      a: () => this.hero.moveLeft(),
      d: () => this.hero.moveRight(),
      space: () => this.boomerang.moveRight(),
      r: () => console.log("r"),
      t: () => console.log("t"),
      y: () => console.log("y"),
    };
  }

  runInteractiveConsole() {
    keypress(process.stdin);
    process.stdin.on("keypress", (ch, key) => {
      if (key) {
        // Вызывает команду, соответствующую нажатой кнопке.
        if (key.name in this.keyboard) {
          this.keyboard[key.name]();
        }
        // Прерывание программы.
        if (key.ctrl && key.name === "c") {
          process.exit();
        }
      }
    });
    process.stdin.setRawMode(true);
  }
}

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

// Какая-то функция.

// Давай попробуем запустить этот скрипт!

module.exports = Keyboard;
