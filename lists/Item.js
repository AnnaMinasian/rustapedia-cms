const { Text, Integer, Relationship, CloudinaryImage, Select } = require('@keystonejs/fields');
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');

const cloudinaryAdapter = new CloudinaryAdapter({
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
    folder: 'images',
  });
  
module.exports = {
    fields: {
    category: { type: Relationship, ref: 'Category' },
    subCategory: {type: Relationship, ref: 'SubCategory.items' },
    name: { type: Text, isRequired: true },
    image: { type: CloudinaryImage, adapter: cloudinaryAdapter },
    text: { type: Text },
    additionalText: { type: Text },
    blueprint: { type: Relationship, ref: 'Item'},
    workBench: { type: Relationship, ref: 'Item.experimentation' },
    experimentation: { type: Relationship, ref: 'Item.workBench', many: true },
    experimentNeeded: { type: Relationship, ref: 'Item.usedInResearch' },
    usedInResearch: {type: Relationship, ref: 'Item.experimentNeeded', many: true },
    experimentCost: { type: Integer },
    researchNeeded: { type: Relationship, ref: 'Item.researches' },
    researches: { type: Relationship, ref: 'Item.researchNeeded', many: true },
    researchCost: { type: Integer },
    itemInfo: { type: Relationship, ref: 'ItemInfo'},
    mainInfo: { type: Relationship, ref: 'MainInfo' },
    weaponInfo: { type: Relationship, ref: 'WeaponInfo' },
    foodInfo: { type: Relationship, ref: 'FoodInfo' },
    craft: { type: Relationship, ref: 'Craft', many: true },
    lootInfo: { type: Relationship, ref:'LootInfo.itemToLoot', many: true },
    loot: { type: Relationship, ref:'LootInfo.container', many: true },
    repairInfo: { type: Relationship, ref: 'Repair.item', many: true },
    repairs: { type: Relationship, ref: 'Repair.tool', many: true },
    recycleResult: { type: Relationship, ref: 'ItemCount', many: true },
    durabilityInfo: { type: Relationship, ref: 'DurabilityInfo', many: true },
    cookingInfo: { type: Relationship, ref: 'CookingInfo', many: true },
    gatheringInfo: { type: Relationship, ref: 'GatheringInfo', many: true },
    damageInfo: { type: Relationship, ref: 'DamageInfo', many: true }
    },
};
