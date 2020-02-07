const { Text, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
  name: { type: Text },
  items: { type: Relationship, ref: 'Item.category', many: true },
  }
};
  