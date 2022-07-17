// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(position) {
    this.skin = "🔥";
    this.position = position;
    this.course = true;
  }

  fly() {
    this.course = true;
    setInterval(() => {
      if (this.course === true) this.moveRight();
      if (this.course === false) this.moveLeft();
    }, 75);
    // this.moveLeft();
  }

  moveLeft() {
    // Идём влево.
    this.position -= 4;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }
}

module.exports = Boomerang;
