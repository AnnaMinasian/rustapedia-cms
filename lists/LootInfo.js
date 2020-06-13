const { Text, Checkbox, Relationship, Float } = require("@keystonejs/fields");

module.exports = {
  fields: {
    container: { type: Relationship, ref: "Item.loot" },
    itemToLoot: { type: Relationship, ref: "Item.lootInfo" },
    isBlueprint: { type: Checkbox },
    condition: { type: Text },
    count: { type: Text },
    chance: { type: Float },
  },
};
