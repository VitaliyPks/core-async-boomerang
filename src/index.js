const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("boomerang", "vitaliy", "1123", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

async function checkUserName(name) {
  try {
    const [result] = await sequelize.query(
      `SELECT * FROM "Boomerang" WHERE name = ?;`,
      {
        replacements: [name],
      }
    );
    return result.length;
  } catch (error) {
    console.log(error.message);
  }
}

async function addUser(name, score) {
  try {
    await sequelize.query(
      `INSERT INTO "Boomerang" (name,score) VALUES ( ?, ?)`,
      { replacements: [name, score] }
    );
  } catch (error) {
    console.log(error.message);
  }
}

async function updateUserScore(score, name) {
  try {
    await sequelize.query(`UPDATE "Boomerang" SET score = ? WHERE name = ?`, {
      replacements: [score, name],
    });
  } catch (error) {
    console.log(error.message);
  }
}

async function getScores(name) {
  try {
    const [result] = await sequelize.query(
      `SELECT score FROM "Boomerang" WHERE name = ?`,
      { replacements: [name] }
    );
    return result[0].score;
  } catch (error) {
    console.log(error.message);
  }
}

async function getTop5() {
  try {
    const [result] = await sequelize.query(
      `SELECT name,score FROM "Boomerang" ORDER BY score DESC LIMIT 5`
    );
    return result.reduce((acc, el, i) => {
      return acc + `${i + 1}.${el.name} рекорд ${el.score}\n`;
    }, ``);
  } catch (error) {
    console.log(error.message);
  }
}
// }  (el, index) => ``)

module.exports = {
  checkUserName,
  addUser,
  updateUserScore,
  getScores,
  getTop5,
};
