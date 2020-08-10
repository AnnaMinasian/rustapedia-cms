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
    item: { type: Relationship, ref: "Item.experiment", many: true },
    workBench: { type: Relationship, ref: "Item.experimentation" },
    experimentNeeded: { type: Relationship, ref: "ItemCount" },
  },
};
