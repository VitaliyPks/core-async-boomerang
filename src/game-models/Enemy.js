// ΠΡΠ°Π³.

class Enemy {
  constructor() {
    this.generateSkin();
    this.position = 29;
  }

  generateSkin() {
    //   const skins = [
    //     "πΎ",
    //     "π",
    //     "πΉ",
    //     "π»",
    //     "π½",
    //     "πΏ",
    //     "π©",
    //     "π€‘",
    //     "π€Ί",
    //     "π§",
    //     "π§",
    //     "π",
    //   ];
    //   this.skin = skins[Math.floor(Math.random() * skins.length)];
    // }

    const skins = ["πͺ²", "πͺ³", "πͺ°", "π¦", "π¦", "π·", "π",'π'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }
  // πͺ² πͺ³ πͺ°

  moveLeft() {
    // ΠΠ΄ΡΠΌ Π²Π»Π΅Π²ΠΎ.
    this.position -= 1;
  }

  die() {
    this.position = "?";
    console.log("Enemy is dead!");
  }
}

module.exports = Enemy;
