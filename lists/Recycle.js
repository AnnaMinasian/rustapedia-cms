const { Text, Relationship } = require("@keystonejs/fields");

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
    yield: { type: Relationship, ref: "ItemCount", many: true },
    item: { type: Relationship, ref: "Item.recycle" },
    recycler: { type: Relationship, ref: "Item.recycler" },
    recycledFrom: { type: Relationship, ref: "Item.recycledFrom", many: true },
  },
};
