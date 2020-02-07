const { Text, Integer, Relationship, CloudinaryImage } = require('@keystonejs/fields');
//const { CloudinaryAdapter } = require('@keystonejs/file-adapters');

/*const cloudinaryAdapter = new CloudinaryAdapter({
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
    folder: 'images',
  });*/
  
module.exports = {
    fields: {
    name: { type: Text, isRequired: true },
    category: { type: Relationship, ref: 'Category.items' },
    //image: { type: CloudinaryImage, adapter: cloudinaryAdapter },
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
    lootInfo: { type: Relationship, ref:'LootInfo', many: true },
    repairInfo: { type: Relationship, ref: 'Repair', many: true },
    recycleResult: { type: Relationship, ref: 'ItemCount', many: true },
    durability: { type: Relationship, ref: 'DurabilityInfo', many: true },
    },
};
