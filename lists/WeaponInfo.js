const { Float, Text, Select } = require("@keystonejs/fields");

module.exports = {
  fields: {
    damage: { type: Float },
    attackSpeed: { type: Float },
    range: { type: Float },
    rateOfFire: { type: Float },
    aimCone: { type: Float },
    aimConePercent: { type: Float },
    capacity: { type: Float },
    reload: { type: Float },
    draw: { type: Float },
    throw: { type: Select, options: "Yes, No" },
    hipAimcone: { type: Float },
    velocity: { type: Float },
    recoil: { type: Float },
    recoilPercent: { type: Float },
    exposionRadius: { type: Text },
    explosionDelay: { type: Text },
    dugChance: { type: Text },
  },
};
