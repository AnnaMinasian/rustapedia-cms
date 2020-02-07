const { Relationship, Integer } = require('@keystonejs/fields');

module.exports = {
  fields: {
    fromItem: { type: Relationship, ref: 'Item' },
    resource: { type: Relationship, ref: 'ItemCount', many: true },
    time: { type: Integer },
    conditionLoss: { type: Integer }
  }
};