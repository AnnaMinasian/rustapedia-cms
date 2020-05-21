const { Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    item: { type: Relationship, ref: 'Item.cookingInfo'},
    furnace: { type: Relationship, ref: 'Item.cooking' },
    processOne: { type: Relationship, ref: 'IngredientInfo'},
    processTwo: { type: Relationship, ref: 'IngredientInfo'},
    processThree: { type: Relationship, ref: 'IngredientInfo'},
    processFour: { type: Relationship, ref: 'IngredientInfo'},
  }
};