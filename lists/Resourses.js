const { Integer, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    name: { type: Relationship, ref: 'Item' },
    amount: { type: Integer },
  }
};