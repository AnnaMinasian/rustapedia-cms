const {
  Text,
  Relationship,
  CloudinaryImage,
  Checkbox,
} = require("@keystonejs/fields");
const { CloudinaryAdapter } = require("@keystonejs/file-adapters");
const { access } = require("../access.js");

const cloudinaryAdapter = new CloudinaryAdapter({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: "images",
});

module.exports = {
  access: {
    read: true,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
  fields: {
    category: { type: Relationship, ref: "Category" },
    subCategory: { type: Relationship, ref: "SubCategory.items" },
    name: { type: Text, isRequired: true, isUnique: true },
    image: { type: CloudinaryImage, adapter: cloudinaryAdapter },
    text: { type: Text },
    additionalText: { type: Text },
    blueprint: { type: Text },
    defaultKnow: { type: Checkbox },
    steamItem: { type: Checkbox },
    itemInfo: { type: Relationship, ref: "ItemInfo" },
    mainInfo: { type: Relationship, ref: "MainInfo" },
    weaponInfo: { type: Relationship, ref: "WeaponInfo" },
    foodInfo: { type: Relationship, ref: "FoodInfo" },
    attireInfo: { type: Relationship, ref: "AttireInfo" },
    lootInfo: { type: Relationship, ref: "LootInfo.itemToLoot", many: true },
    loot: { type: Relationship, ref: "LootInfo.container", many: true },
    craftInfo: { type: Relationship, ref: "Craft.item" },
    usedForCraft: { type: Relationship, ref: "Craft.workBench", many: true },
    ingredientFor: { type: Relationship, ref: "Craft.ingredients", many: true },
    experiment: { type: Relationship, ref: "Experiment.item" },
    experimentation: {
      type: Relationship,
      ref: "Experiment.workBench",
      many: true,
    },
    equipment: { type: Relationship, ref: "EquipmentInfo.animal", many: true },
    equipmentFor: { type: Relationship, ref: "EquipmentInfo.item" },
    breeds: { type: Relationship, ref: "BreedsInfo", many: true },
    feeding: { type: Relationship, ref: "FeedingInfo", many: true },
    produces: { type: Relationship, ref: "ProduceInfo.animal", many: true },
    productOf: { type: Relationship, ref: "ProduceInfo.item", many: true },
    research: { type: Relationship, ref: "ResearchInfo.item" },
    researches: {
      type: Relationship,
      ref: "ResearchInfo.researchTool",
      many: true,
    },
    repair: { type: Relationship, ref: "Repair.item", many: true },
    repairs: { type: Relationship, ref: "Repair.tool", many: true },
    recycle: { type: Relationship, ref: "Recycle.item" },
    recycledFrom: {
      type: Relationship,
      ref: "Recycle.recycledFrom",
      many: true,
    },
    recycler: { type: Relationship, ref: "Recycle.recycler", many: true },
    durabilityInfo: { type: Relationship, ref: "DurabilityInfo", many: true },
    cookingInfo: { type: Relationship, ref: "CookingInfo.item", many: true },
    cooking: { type: Relationship, ref: "CookingInfo.furnace", many: true },
    composter: { type: Relationship, ref: "Compostable.tool", many: true },
    compostable: { type: Relationship, ref: "Compostable.item" },
    composting: {
      type: Relationship,
      ref: "Compostable.composting",
      many: true,
    },
    gather: { type: Relationship, ref: "GatheringInfo.tool", many: true },
    gatheringInfo: {
      type: Relationship,
      ref: "GatheringInfo.fromItem",
      many: true,
    },
    gatheredFrom: {
      type: Relationship,
      ref: "Item",
      many: true,
    },
    damageInfo: { type: Relationship, ref: "DamageInfo.weapon", many: true },
    ammoFor: { type: Relationship, ref: "DamageInfo.ammunition", many: true },
    drops: { type: Relationship, ref: "DropInfo.vehicle" },
    droppedBy: { type: Relationship, ref: "DropInfo.crate" },
    collectible: { type: Relationship, ref: "CollectInfo.collectedFrom" },
    collected: { type: Relationship, ref: "CollectInfo.collectible" },
    yields: { type: Relationship, ref: "YieldsInfo.monument", many: true },
    extractedBy: {
      type: Relationship,
      ref: "YieldsInfo.resources",
      many: true,
    },
    fueledBy: { type: Relationship, ref: "FuelInfo.object", many: true },
    fuelFor: { type: Relationship, ref: "FuelInfo.fuel", many: true },
    shopping: { type: Relationship, ref: "Shopping.item", many: true },
    modsInfo: { type: Relationship, ref: "ModsInfo.weapon", many: true },
    modsFor: { type: Relationship, ref: "ModsInfo.modification", many: true },
    caughtBy: { type: Relationship, ref: "FishingInfo.catch", many: true },
    fishing: { type: Relationship, ref: "FishingInfo.trap", many: true },
  },
};
