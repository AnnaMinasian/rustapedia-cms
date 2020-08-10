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
    item: { type: Relationship, ref: "Item.research", many: true },
    researchTool: { type: Relationship, ref: "Item.researches" },
    researchNeeded: { type: Relationship, ref: "ItemCount" },
  },
};
