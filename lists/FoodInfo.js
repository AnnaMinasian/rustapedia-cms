const { Integer } = require('@keystonejs/fields');

module.exports = {
  fields: {
    calories: { type: Integer },
    hydration: { type: Integer },
    health: { type: Integer },
    healthOverTime: { type: Integer },
    capacity: { type: Integer },
  }
};