const { Select, Relationship, Float, Text } = require("@keystonejs/fields");

module.exports = {
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
