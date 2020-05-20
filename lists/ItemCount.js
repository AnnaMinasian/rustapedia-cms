const { Integer, Relationship, Float } = require('@keystonejs/fields');

module.exports = {
  fields: {
    item: { type: Relationship, ref: 'Item' },
    count: { type: Integer },
    percent: { type: Integer },
    float: { type: Float },
  }
};