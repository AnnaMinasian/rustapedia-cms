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
    cookingItem: { type: Relationship, ref: "Item" },
    needed: { type: Relationship, ref: "Item" },
    count: { type: Float },
  },
};
