const { Integer, Float } = require("@keystonejs/fields");

module.exports = {
  fields: {
    calories: { type: Float },
    hydration: { type: Float },
    health: { type: Float },
    healthOverTime: { type: Float },
    capacity: { type: Integer },
  },
};
