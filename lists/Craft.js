const { Text, Select, Relationship, Integer } = require("@keystonejs/fields");

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
    item: { type: Relationship, ref: "Item.craftInfo" },
    workBenchNeeded: { type: Select, options: "Yes, No" },
    requiredItemCounts: { type: Relationship, ref: "ItemCount", many: true },
    ingredients: { type: Relationship, ref: "Item.ingredientFor", many: true },
    amount: { type: Integer },
    workBench: { type: Relationship, ref: "Item.usedForCraft", many: true },
    time1: { type: Text },
    time2: { type: Text },
    time3: { type: Text },
  },
};
