const { Text, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
  name: { type: Text },
  category: { type: Relationship, ref: 'Category.subCategory' },
  items: { type: Relationship, ref: 'Item.subCategory', many: true },
  }
};
  