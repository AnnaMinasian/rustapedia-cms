const { Relationship, Integer } = require('@keystonejs/fields');

module.exports = {
  fields: {
    item: { type: Relationship, ref: 'Item.compostable' },
    tool: { type: Relationship, ref: 'Item.composter' },
    composting: { type: Relationship, ref: 'ItemCount' },
    amountPerStack: { type: Integer },
  }
};