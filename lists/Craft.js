const { Text, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    blueprint: { type: Text },
    requiredItemCounts: { type: Relationship, ref: 'ItemCount', many: true },
    time: { type: Text },
    item: { type: Relationship, ref: 'Item.craftInfo' },
    workBench: { type: Relationship, ref: 'Item.usedForCraft' }
  }
};