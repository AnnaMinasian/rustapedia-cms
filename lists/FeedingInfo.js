const { Float, Relationship, Integer } = require("@keystonejs/fields");

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
    food: { type: Relationship, ref: "Item" },
    addStamina: { type: Float },
    healing: { type: Integer },
  },
};
