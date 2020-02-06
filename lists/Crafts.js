const { Text, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
      name: { type: Relationship, ref: 'Item'},
      ingredientsFor: { type: Relationship, ref: 'Item.ingredientsFor', many: true },
      blueprint: { type: Text },
      ingredients: { type: Relationship, ref: 'Resourse', many: true },
      time: { type: Text },
      workBenchLevel: { type: Text },
  }
};