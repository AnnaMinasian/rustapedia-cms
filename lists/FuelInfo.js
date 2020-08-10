const { Integer, Relationship } = require("@keystonejs/fields");

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
    fuel: { type: Relationship, ref: "Item.fuelFor" },
    object: { type: Relationship, ref: "Item.fueledBy" },
    amountPerHour: { type: Integer },
  },
};
