const { Integer, Text } = require("@keystonejs/fields");

module.exports = {
  fields: {
    calories: { type: Text },
    hydration: { type: Text },
    health: { type: Text },
    healthOverTime: { type: Text },
    capacity: { type: Integer },
  },
};
