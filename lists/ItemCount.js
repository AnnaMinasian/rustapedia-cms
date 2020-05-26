const { Integer, Relationship, Float, Text } = require("@keystonejs/fields");

module.exports = {
  fields: {
    item: { type: Relationship, ref: "Item" },
    count: { type: Float },
    range: { type: Text },
    percent: { type: Integer },
  },
};
