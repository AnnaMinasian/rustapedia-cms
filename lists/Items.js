const { Text, Integer, Relationship } = require('@keystonejs/fields');

module.exports = {
    fields: {
    name: { type: Text, isRequired: true },
    category: { type: Relationship, ref: 'Category.items' },
    text: { type: Text },
    additionalText: { type: Text },
    respawnTimer: { type: Text },
    decay: { type: Integer },
    mainInfo: { type: Relationship, ref: 'MainInfo' },
    weaponInfo: { type: Relationship, ref: 'WeaponInfo' },
    foodInfo: { type: Relationship, ref: 'FoodInfo' },
    hp: { type: Integer },
    loot: { type: Relationship, ref: 'Loot.item', many: true },
    craft: { type: Relationship, ref: 'Craft', many: true },
    ingredientsFor: { type: Relationship, ref: 'Craft.ingredientsFor'},
    },
};
