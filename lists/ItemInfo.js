const { Integer } = require('@keystonejs/fields');

module.exports = {
  fields: {
    respawnTimer: { type: Integer },
    decay: { type:  Integer },
    upkeep: { type: Integer },
  }
};
