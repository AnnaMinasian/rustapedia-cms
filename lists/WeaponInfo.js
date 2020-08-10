const { Float, Text, Select } = require("@keystonejs/fields");

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
    damage: { type: Text },
    attackSpeed: { type: Float },
    range: { type: Float },
    rateOfFire: { type: Text },
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
