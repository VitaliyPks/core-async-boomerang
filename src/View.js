// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(arrTrack, score) {
    const yourTeamName = "Elbrus";

    // Тут всё рисуем.
    console.clear();
    console.log(arrTrack.join(""));
    console.log("\n");
    console.log(`You killed ${score} enemies!`);
    console.log("\n\n");
    console.log(`Created by ${yourTeamName} with love`);
  }
}

module.exports = View;
