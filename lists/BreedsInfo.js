const { Text, Float, Integer } = require("@keystonejs/fields");

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
    breed: { type: Text },
    speed: { type: Float },
    stamina: { type: Integer },
    hp: { type: Integer },
  },
};
