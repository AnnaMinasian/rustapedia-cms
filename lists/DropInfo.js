const { Relationship, Integer } = require("@keystonejs/fields");

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
    vehicle: { type: Relationship, ref: "Item.drops" },
    crate: { type: Relationship, ref: "Item.droppedBy" },
    amount: { type: Integer },
  },
};
