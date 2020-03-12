const { Text, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
      requiredItemCounts: { type: Relationship, ref: 'ItemCount', many: true },
      time: { type: Text },
  }
};