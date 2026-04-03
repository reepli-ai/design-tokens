const tokens = require('./tokens.json');

module.exports = {
  theme: {
    extend: {
      colors: tokens.colors,
      fontFamily: {
        heading: [tokens.typography['font-heading']],
        body: [tokens.typography['font-body']],
        accent: [tokens.typography['font-accent']]
      },
      borderRadius: tokens.radii,
      boxShadow: tokens.shadows
    }
  }
};
