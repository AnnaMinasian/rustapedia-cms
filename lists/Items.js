const { Text, Integer } = require('@keystonejs/fields');

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    category: { type: Text, isRequired: true },
    text: { type: Text },
    additionalText: { type: Text },
    respawnTimer: { type: Integer },
    identifier: { type: Integer },
    stackSize: { type: Integer },
    despawnTimer: { type: Integer },
    hp: { type: Integer },
  },
};