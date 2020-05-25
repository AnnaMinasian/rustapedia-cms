const { Integer, Relationship, Float } = require("@keystonejs/fields");

module.exports = {
  fields: {
    item: { type: Relationship, ref: "Item" },
    count: { type: Float },
    range: { type: Integer },
    percent: { type: Integer },
  },
};
