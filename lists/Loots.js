const { Text, Integer, Relationship, Float } = require('@keystonejs/fields');

module.exports = {
  fields: {
    item: { type: Relationship, ref: 'Item.lootInfo' },
    container: { type: Relationship, ref: 'Container.loot' },
    condition: { type: Text },
    amount: { type: Integer },
    chance: { type: Float },
  }
};