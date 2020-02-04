const { Text, Integer, Relationship } = require('@keystonejs/fields');

module.exports = {
    fields: {
    name: { type: Text, isRequired: true },
    category: { type: Relationship, ref: 'Category.items' },
    text: { type: Text },
    additionalText: { type: Text },
    respawnTimer: { type: Integer },
    identifier: { type: Integer },
    stackSize: { type: Integer },
    despawnTimer: { type: Integer },
    hp: { type: Integer },
    },
};
