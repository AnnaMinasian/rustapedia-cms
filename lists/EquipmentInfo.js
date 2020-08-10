const { Select, Relationship, Integer } = require("@keystonejs/fields");

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
    item: { type: Relationship, ref: "Item.equipmentFor" },
    animal: { type: Relationship, ref: "Item.equipment" },
    extraSlots: { type: Integer },
    protection: { type: Select, options: "Yes, No" },
  },
};
