export const theme = {
  fg: 'palevioletred',
  bg: 'white',
};

export const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
});
