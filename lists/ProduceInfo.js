const { Relationship, Text } = require("@keystonejs/fields");

module.exports = {
  fields: {
    item: { type: Relationship, ref: "Item.productOf" },
    animal: { type: Relationship, ref: "Item.produces" },
    amount: { type: Text },
  },
};
