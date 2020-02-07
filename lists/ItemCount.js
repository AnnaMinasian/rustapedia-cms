const { Integer, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    item: { type: Relationship, ref: 'Item' },
    count: { type: Integer },
  }
};