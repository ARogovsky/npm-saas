import React from 'react';

// 1) Переопределяем переменные из библиотеки
//import './override.sass';

// 2) Подключаем стили библиотеки (ColoredText.sass)
//import 'my-react-sass-package/src/ColoredText.sass';

// 3) Импортируем компонент
import ColoredText from 'my-react-sass-package';

// 4) Подключаем локальные стили App.sass (не обязательно, но оставим)
import './App.sass';

function App() {
  return (
    <div className="App">
      <h1>Demo: my-react-sass-package (SASS Syntax)</h1>
      {/* Первый ColoredText: синий (берёт $colored-text-color: blue) */}
      <ColoredText text="Привет из библиотеки! (синий)" />

      {/* Второй ColoredText: CSS-селектор :nth-of-type(2) заставит его быть чёрным */}
      <ColoredText text="ещё пример..." />
    </div>
  );
}
export default App;
