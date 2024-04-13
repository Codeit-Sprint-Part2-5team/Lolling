const convertColor = (color) => {
  if (color === 'beige') {
    return 'var(--orange-200)';
  }
  return `var(--${color}-200)`;
};

export default convertColor;
