const { Text, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
      itemToCraft: { type: Relationship, ref: 'Item'},
      blueprint: { type: Text },
      requiredItemCounts: { type: Relationship, ref: 'ItemCount', many: true },
      time: { type: Text },
      workBench: { type: Relationship, ref: 'Item' },
  }
};