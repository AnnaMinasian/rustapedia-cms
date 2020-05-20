const { Integer, Relationship, Float } = require('@keystonejs/fields');

module.exports = {
  fields: {
    item: { type: Relationship, ref: 'Item' },
    count: { type: Float },
    percent: { type: Integer },
  }
};