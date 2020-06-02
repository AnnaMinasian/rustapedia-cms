const { Select, Relationship, Integer } = require('@keystonejs/fields');

module.exports = {
  fields: {
    item: { type: Relationship, ref: "Item.equipmentFor"},
    animal: { type: Relationship, ref: "Item.equipment"},
    extraSlots: { type: Integer },
    protection: { type: Select, options: 'Yes, No' },
  }
};