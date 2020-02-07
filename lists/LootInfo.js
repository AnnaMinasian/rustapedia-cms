const { Text, Integer, Relationship, Float } = require('@keystonejs/fields');

module.exports = {
  fields: {
    container: { type: Relationship, ref: 'Item' },
    condition: { type: Text },
    count: { type: Integer },
    chance: { type: Float },
  }
};