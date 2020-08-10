const { Select, Relationship, Float, Text } = require("@keystonejs/fields");

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
    weapon: { type: Relationship, ref: "Item.modsInfo" },
    modification: { type: Relationship, ref: "Item.modsFor" },
    damage: { type: Float },
    rateOfFire: { type: Float },
    aimCone: { type: Float },
    hipAimCone: { type: Float },
    velocity: { type: Float },
    recoil: { type: Float },
    aimSway: { type: Float },
  },
};
