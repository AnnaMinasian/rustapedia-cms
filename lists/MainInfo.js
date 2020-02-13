const { Integer, Text } = require('@keystonejs/fields');

module.exports = {
  fields: {
    identifier: { type: Integer },
    stackSize: { type: Integer },
    despawnTimer: { type: Text },
  }
};