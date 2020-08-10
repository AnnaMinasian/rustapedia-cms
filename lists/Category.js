const { Relationship, Select } = require("@keystonejs/fields");

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
    name: { type: Select, options: "Items, Environment" },
    subCategory: {
      type: Relationship,
      ref: "SubCategory.category",
      many: true,
    },
  },
};
