const { Relationship } = require("@keystonejs/fields");

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
    item: { type: Relationship, ref: "Item.cookingInfo", many: true },
    furnace: { type: Relationship, ref: "Item.cooking", many: true },
    processOne: { type: Relationship, ref: "IngredientInfo" },
    processTwo: { type: Relationship, ref: "IngredientInfo" },
    processThree: { type: Relationship, ref: "IngredientInfo" },
    processFour: { type: Relationship, ref: "IngredientInfo" },
  },
};
