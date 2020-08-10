const { Integer, Float } = require("@keystonejs/fields");

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
    calories: { type: Float },
    hydration: { type: Float },
    health: { type: Float },
    healthOverTime: { type: Float },
    capacity: { type: Integer },
    radiation: { type: Float },
    bleeding: { type: Float },
  },
};
