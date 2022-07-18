class View {

  render(arrTrack, score, name) {

    // Тут всё рисуем.
    console.clear();
    console.log(arrTrack.join(""));
    console.log("\n");
    console.log(`Игрок: ${name}`);
    console.log(`Убито врагов: ${score}`);
  }
}

module.exports = View;