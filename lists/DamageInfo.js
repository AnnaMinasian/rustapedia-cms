const { Select, Relationship, Float, Text } = require("@keystonejs/fields");

module.exports = {
  fields: {
    attack: { type: Select, options: "Melee, Torch Ignited, Throw" },
    ammunition: { type: Relationship, ref: "Item.ammoFor" },
    damage: { type: Text },
    dps: { type: Float },
    headShot: { type: Float },
    aimCone: { type: Float },
    velocity: { type: Float },
  },
};
