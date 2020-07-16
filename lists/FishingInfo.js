const { Integer, Relationship, Text } = require("@keystonejs/fields");

module.exports = {
  fields: {
    trap: { type: Relationship, ref: "Item.fishing" },
    catch: { type: Relationship, ref: "Item.caughtBy" },
    amount: { type: Text },
    baitCalories: { type: Integer },
    bait: { type: Relationship, ref: "Item" },
  },
};
