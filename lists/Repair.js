const { Text, Relationship, Select } = require("@keystonejs/fields");

module.exports = {
  fields: {
    item: { type: Relationship, ref: "Item.repair" },
    tool: { type: Relationship, ref: "Item.repairs" },
    repairCoast: { type: Relationship, ref: "ItemCount", many: true },
    condition: { type: Text },
    blueprintRequired: { type: Select, options: "Yes, No" },
  },
};
