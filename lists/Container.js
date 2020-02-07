const { Text, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
  name: { type: Text },
  text: { type: Text },
  loot: { type: Relationship, ref: 'Loot.container', many: true }, 
  }
};