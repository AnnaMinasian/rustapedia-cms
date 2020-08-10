const { Integer, Text } = require("@keystonejs/fields");

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
    respawnTimer: { type: Integer },
    decay: { type: Integer },
    decayTimeOutside: { type: Integer },
    decayTimeInside: { type: Integer },
    upkeep: { type: Integer },
    speed: { type: Text },
    capacity: { type: Integer },
  },
};
