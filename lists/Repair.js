const { Text, Relationship, Select } = require("@keystonejs/fields");

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
    item: { type: Relationship, ref: "Item.repair" },
    tool: { type: Relationship, ref: "Item.repairs" },
    repairCoast: { type: Relationship, ref: "ItemCount", many: true },
    condition: { type: Text },
    blueprintRequired: { type: Select, options: "Yes, No" },
  },
};
