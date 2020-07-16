const { Relationship, Float } = require("@keystonejs/fields");

module.exports = {
  fields: {
    cookingItem: { type: Relationship, ref: "Item" },
    needed: { type: Relationship, ref: "Item" },
    count: { type: Float },
  },
};
