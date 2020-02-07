const { Float, Integer, Text } = require('@keystonejs/fields');

module.exports = {
  fields: {
    damage: { type: Integer },
    attackSpeed: { type: Integer },
    range: { type: Integer },
    rateOfFire: { type: Integer },
    aimCone: { type: Float },
    capacity: { type: Integer },
    reload: { type: Float },
    draw: { type: Integer },
    throw: { type: Text },
    hipAimcone: { type: Integer },
    velocity: { type: Integer },
    recoil: { type: Integer },
    exposionRadius: { type: Text },
    explosionDelay: { type: Text },
    dugChance: { type: Text },
  }
};