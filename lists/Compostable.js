const { Relationship, Float } = require("@keystonejs/fields");

const { access } = require("../access.js");
module.exports = {
  access: {
    read: true,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
  fields: {
    item: { type: Relationship, ref: "Item.compostable" },
    tool: { type: Relationship, ref: "Item.composter" },
    result: { type: Relationship, ref: "ItemCount" },
    composting: { type: Relationship, ref: "Item.composting" },
    amountPerStack: { type: Float },
  },
};
