const { Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    furnace: { type: Relationship, ref: 'Item' },
    processOne: { type: Relationship, ref: 'IngredientInfo'},
    processTwo: { type: Relationship, ref: 'IngredientInfo'},
    processThree: { type: Relationship, ref: 'IngredientInfo'},
  }
};