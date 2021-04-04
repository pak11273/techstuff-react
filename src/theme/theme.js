export const theme = {
  fg: 'palevioletred',
  bg: 'white',
  colors: {
    medBlue: '#2050BC',
    darkBlue: '#0C1A3F',
  },
};

export const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
});
