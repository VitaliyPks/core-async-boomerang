// Основной файл.
// Запускает игру.
const Game = require("./src/Game");

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 30,
});

let text =
  "В несильно далеком будущем,\nученые активно работали над улучшением формулы для\nинсектицидов (средств для борьбы с насекомыми)\nВ связи с некоторыми ошибками ученых, подопытные\nнасекомые приобрели резистентность (устойчивость к ядам),\nв следствии чего их популяция многократно увеличилась,\nи самое страшное, они начали нападать на людей.\n\nНаш герой - обычный фермер,\nкоторый потерял на этой войне (с насекомыми)\nвсю свою семью и поставил целью своей\nжизни уничтожение всей популяции разродившихся насекомых.\n\nВ связи с вышеописанными мутациями генома насекомых,\nединственным действительным средством борьбы с насекомыми\nостался банальный тапок и прочая обувь,\nкоторую и использует наш герой в своей борьбе.\n";
let str = "";
let count = 0;
const textInterval = setInterval(() => {
  if (str.length < text.length) {
    console.clear();
    str = str + text[count];
    count += 1;
    console.log(str);
  } else {
    clearInterval(textInterval);
    game.play();
  }
}, 25);
// Запуск игры.
