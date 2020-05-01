const { Text, Integer, Relationship, Select } = require('@keystonejs/fields');

module.exports = {
  fields: {
    type: { type: Select, options: 'Explosive, Melle, Guns, Throwing' },
    item: { type: Relationship, ref: 'Item' },
    time: { type: Text },
    fuelNeeded: { type: Integer },
    sulfurNeeded: { type: Integer },
    quantity: { type: Integer },
  }
};