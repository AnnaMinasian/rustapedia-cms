const { Integer, Relationship } = require("@keystonejs/fields");

module.exports = {
  fields: {
    fuel: { type: Relationship, ref: "Item.fuelFor" },
    object: { type: Relationship, ref: "Item.fueledBy" },
    amountPerHour: { type: Integer },
  },
};
