const { Float, Select } = require("@keystonejs/fields");

module.exports = {
  fields: {
    projectile: { type: Float },
    melee: { type: Float },
    bite: { type: Float },
    radiation: { type: Float },
    cold: { type: Float },
    explosion: { type: Float },
    waterproof: { type: Select, options: "Yes, No" },
  },
};
