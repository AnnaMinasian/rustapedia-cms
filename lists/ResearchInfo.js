const { Text, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    item: { type: Relationship, ref: 'Item.research' },
    researchTool: { type: Relationship, ref: 'Item.researches' },
    researchNeeded: { type: Relationship, ref: 'ItemCount' },
  }
};