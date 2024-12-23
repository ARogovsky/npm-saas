const React = require('react');

/**
 * ColoredText — React-компонент, который опирается на класс .colored-text,
 * заданный в SASS (файл ColoredText.sass).
 * Мы не импортируем здесь стили напрямую, чтобы дать возможность
 * пользователю переопределять переменные и решать, как компилировать SASS.
 */
function ColoredText({ text = "Hello from SASS!" }) {
  return React.createElement('span', { className: 'colored-text' }, text);
}

module.exports = ColoredText;
