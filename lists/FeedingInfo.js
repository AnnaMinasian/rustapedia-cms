const { Float, Relationship, Integer } = require('@keystonejs/fields');

module.exports = {
  fields: {
      food: { type: Relationship, ref: "Item" },
      addStamina: { type: Float },
      healing: { type: Integer },
  }
};