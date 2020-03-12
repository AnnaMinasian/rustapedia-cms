const { Text, Integer, Relationship, Float } = require('@keystonejs/fields');

module.exports = {
  fields: {
    container: { type: Relationship, ref: 'Item.loot' },
    itemToLoot: { type: Relationship, ref: 'Item.lootInfo' },
    condition: { type: Text },
    count: { type: Integer },
    chance: { type: Float },
  }
};