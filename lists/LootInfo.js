const { Text, Checkbox, Relationship, Float } = require("@keystonejs/fields");

const { access } = require("../access.js");
module.exports = {
  access: {
    read: true,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
  fields: {
    container: { type: Relationship, ref: "Item.loot" },
    itemToLoot: { type: Relationship, ref: "Item.lootInfo" },
    isBlueprint: { type: Checkbox },
    condition: { type: Text },
    count: { type: Text },
    chance: { type: Float },
  },
};
