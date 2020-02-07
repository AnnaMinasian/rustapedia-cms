const { Text, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
      itemToCraft: { type: Relationship, ref: 'Item'},
      requiredItemCounts: { type: Relationship, ref: 'ItemCount', many: true },
      time: { type: Text },
  }
};