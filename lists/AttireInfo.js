const { Float, Select } = require("@keystonejs/fields");

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
    projectile: { type: Float },
    melee: { type: Float },
    bite: { type: Float },
    radiation: { type: Float },
    cold: { type: Float },
    explosion: { type: Float },
    waterproof: { type: Select, options: "Yes, No" },
  },
};
