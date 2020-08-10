const { Integer, Text, Float } = require("@keystonejs/fields");

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
    identifier: { type: Float },
    stackSize: { type: Integer },
    despawnTime: { type: Integer },
    hp: { type: Integer },
    stamina: { type: Text },
    mainRotorHP: { type: Integer },
    tailRotorHP: { type: Integer },
  },
};
