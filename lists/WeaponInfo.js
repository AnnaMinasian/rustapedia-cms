const { Float, Integer, Text, Select } = require('@keystonejs/fields');

module.exports = {
  fields: {
    damage: { type: Integer },
    attackSpeed: { type: Integer },
    range: { type: Float },
    rateOfFire: { type: Integer },
    aimCone: { type: Float },
    capacity: { type: Integer },
    reload: { type: Float },
    draw: { type: Integer },
    throw: { type: Select, options: 'Yes, No' },
    hipAimcone: { type: Integer },
    velocity: { type: Integer },
    recoil: { type: Integer },
    exposionRadius: { type: Text },
    explosionDelay: { type: Text },
    dugChance: { type: Text },
  }
};