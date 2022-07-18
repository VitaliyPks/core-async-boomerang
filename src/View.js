class View {
  render(arrTrack, score, name, trackLength) {
    // Тут всё рисуем.
    console.clear();
    console.log(arrTrack.join(""));
    console.log(" ");
    console.log(new Array(trackLength - 13).fill("🌱").join(""));
    console.log("\n");
    console.log(`Игрок: ${name}`);
    console.log(`Убито врагов: ${score}`);
  }
}

module.exports = View;
