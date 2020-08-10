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
    location: { type: Text },
    pay: { type: Relationship, ref: "ItemCount" },
    receive: { type: Relationship, ref: "ItemCount" },
    item: { type: Relationship, ref: "Item.shopping", many: true },
  },
};
