import styles from 'ansi-styles';

const colors = {
  reset: '\x1b[0m',
  fg: {
    red: '\x1b[30m',
  },
};

/**
 *
 * @param {*} color
 * @param {*} text
 * @returns
 */
function coloredText(color, text) {
  const style = styles.color[color];
  return `${style.open}${text}${style.close}`;
}

export default {
  red: (text) => coloredText('red', text),
  green: (text) => coloredText('green', text),
  blue: (text) => coloredText('blue', text),
};
