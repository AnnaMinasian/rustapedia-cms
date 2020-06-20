const { Relationship, Select } = require("@keystonejs/fields");

module.exports = {
  fields: {
    collectible: { type: Relationship, ref: "Item.collected", many: true },
    collectedFrom: { type: Relationship, ref: "Item.collectible" },
    items: { type: Relationship, ref: "ItemCount", many: true },
  },
};
