const { Text, Integer, Relationship, Select } = require('@keystonejs/fields');

module.exports = {
  fields: {
    type: { type: Select, options: 'Explosive, Melle, Guns, Throwing Attacks' },
    item: { type: Relationship, ref: 'Item' },
    time: { type: Text },
    sulfurNeeded: { type: Integer },
    quantity: { type: Integer },
  }
};