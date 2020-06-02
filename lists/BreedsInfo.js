const { Text, Float, Integer } = require('@keystonejs/fields');

module.exports = {
  fields: {
      breed: { type: Text },
      speed: { type: Float },
      stamina: { type: Integer },
      hp: { type: Integer },
  }
};