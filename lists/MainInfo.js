const { Integer } = require('@keystonejs/fields');

module.exports = {
  fields: {
    identifier: { type: Integer },
    stackSize: { type: Integer },
    despawnTime: { type: Integer },
    hp: { type: Integer },
  }
};