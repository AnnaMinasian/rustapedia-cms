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
    name: { type: Text },
    category: { type: Relationship, ref: "Category.subCategory" },
    items: { type: Relationship, ref: "Item.subCategory", many: true },
  },
};
