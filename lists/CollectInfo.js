const { Relationship } = require("@keystonejs/fields");

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
    collectible: { type: Relationship, ref: "Item.collected", many: true },
    collectedFrom: { type: Relationship, ref: "Item.collectible" },
    items: { type: Relationship, ref: "ItemCount", many: true },
  },
};
