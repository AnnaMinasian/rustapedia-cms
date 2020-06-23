const { Integer, Text } = require("@keystonejs/fields");

module.exports = {
  fields: {
    respawnTimer: { type: Integer },
    decay: { type: Integer },
    decayTimeOutside: { type: Integer },
    decayTimeInside: { type: Integer },
    upkeep: { type: Integer },
    speed: { type: Text },
  },
};
