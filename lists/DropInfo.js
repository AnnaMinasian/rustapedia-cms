const { Relationship, Integer } = require("@keystonejs/fields");

module.exports = {
  fields: {
    vehicle: { type: Relationship, ref: "Item.drops" },
    crate: { type: Relationship, ref: "Item.droppedBy" },
    amount: { type: Integer },
  },
};
