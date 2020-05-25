const { Relationship, Integer, Text } = require("@keystonejs/fields");

module.exports = {
  fields: {
    fromItem: { type: Relationship, ref: "Item.gatheringInfo" },
    resource: { type: Relationship, ref: "Item.gatheredFrom", many: true },
    tool: { type: Relationship, ref: "Item.gather" },
    result: { type: Relationship, ref: "ItemCount", many: true },
    time: { type: Text },
    conditionLoss: { type: Integer },
  },
};
