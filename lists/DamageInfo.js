const { Select, Relationship, Integer } = require("@keystonejs/fields");

module.exports = {
  fields: {
    attack: { type: Select, options: "Melee, Torch Ignited, Throw" },
    ammunition: { type: Relationship, ref: "Item.ammoFor" },
    damage: { type: Integer },
    dps: { type: Integer },
    headShot: { type: Integer },
    aimCone: { type: Integer },
    velocity: { type: Integer },
  },
};
