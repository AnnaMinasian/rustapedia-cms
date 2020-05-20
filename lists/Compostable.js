const { Relationship, Integer } = require('@keystonejs/fields');

module.exports = {
  fields: {
    item: { type: Relationship, ref: 'Item.compostable' },
    tool: { type: Relationship, ref: 'Item.composter' },
    result: { type: Relationship, ref: 'ItemCount' },
    composting: { type: Relationship, ref: 'Item.composting' }, 
    amountPerStack: { type: Integer },
  }
};