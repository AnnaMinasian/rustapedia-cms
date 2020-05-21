const { Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    item: { type: Relationship, ref: 'Item.coockingInfo'},
    furnace: { type: Relationship, ref: 'Item.coocking' },
    processOne: { type: Relationship, ref: 'IngredientInfo'},
    processTwo: { type: Relationship, ref: 'IngredientInfo'},
    processThree: { type: Relationship, ref: 'IngredientInfo'},
    processFour: { type: Relationship, ref: 'IngredientInfo'},
  }
};