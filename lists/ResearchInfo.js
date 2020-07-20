const { Text, Relationship } = require("@keystonejs/fields");

module.exports = {
  fields: {
    item: { type: Relationship, ref: "Item.research", many: true },
    researchTool: { type: Relationship, ref: "Item.researches" },
    researchNeeded: { type: Relationship, ref: "ItemCount" },
  },
};
