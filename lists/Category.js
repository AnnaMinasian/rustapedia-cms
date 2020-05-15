const { Relationship, Select } = require('@keystonejs/fields');

module.exports = {
  fields: {
    name: { type: Select, options: 'Items, Environment' },
    subCategory: { type: Relationship, ref: 'SubCategory.category', many: true },
  }
};
  