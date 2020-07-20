const { Text, Relationship } = require("@keystonejs/fields");

module.exports = {
  fields: {
    item: { type: Relationship, ref: "Item.experiment", many: true },
    workBench: { type: Relationship, ref: "Item.experimentation" },
    experimentNeeded: { type: Relationship, ref: "ItemCount" },
  },
};
