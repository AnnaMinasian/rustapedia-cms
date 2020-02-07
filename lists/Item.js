const { Text, Integer, Relationship } = require('@keystonejs/fields');

module.exports = {
    fields: {
    name: { type: Text, isRequired: true },
    category: { type: Relationship, ref: 'Category.items' },
    text: { type: Text },
    additionalText: { type: Text },
    respawnTimer: { type: Text },
    decay: { type: Integer },
    hp: { type: Integer },
    workBench: { type: Relationship, ref: 'Item' },
    blueprint: { type: Text },
    experimentCost: { type: Integer },
    mainInfo: { type: Relationship, ref: 'MainInfo' },
    weaponInfo: { type: Relationship, ref: 'WeaponInfo' },
    foodInfo: { type: Relationship, ref: 'FoodInfo' },
    craft: { type: Relationship, ref: 'Craft', many: true },
    lootInfo: { type: Relationship, ref:'Loot.item', many: true },
    repairInfo: { type: Relationship, ref: 'Repair', many: true },
    },
};
