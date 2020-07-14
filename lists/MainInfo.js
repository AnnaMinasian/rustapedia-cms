const { Integer, Text, Float } = require("@keystonejs/fields");

module.exports = {
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
