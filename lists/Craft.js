const { Text, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    requiredItemCounts: { type: Relationship, ref: 'ItemCount', many: true },
    ingredients: { type: Relationship, ref: 'Item.ingredientFor', many: true }, 
    time: { type: Text },
    item: { type: Relationship, ref: 'Item.craftInfo' },
    workBench: { type: Relationship, ref: 'Item.usedForCraft' },
  }
};