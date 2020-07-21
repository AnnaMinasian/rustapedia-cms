const { Select, Relationship, Float, Text } = require("@keystonejs/fields");

module.exports = {
  fields: {
    weapon: { type: Relationship, ref: "Item.damageInfo" },
    ammunition: { type: Relationship, ref: "Item.ammoFor" },
    attack: { type: Select, options: "Melee, Torch Ignited, Throw" },
    damage: { type: Text },
    dps: { type: Text },
    headShot: { type: Float },
    aimCone: { type: Float },
    spread: { type: Float },
    velocity: { type: Text },
  },
};
