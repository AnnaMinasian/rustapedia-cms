const { Text, Relationship } = require("@keystonejs/fields");

module.exports = {
  fields: {
    location: { type: Text },
    pay: { type: Relationship, ref: "ItemCount" },
    receive: { type: Relationship, ref: "ItemCount" },
    item: { type: Relationship, ref: "Item.shopping", many: true },
  },
};
