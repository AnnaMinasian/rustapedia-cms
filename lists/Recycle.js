const { Text, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    yield: { type: Relationship, ref: 'ItemCount', many: true },
    item: { type: Relationship, ref: 'Item.recycle' },
    recycler: { type: Relationship, ref: 'Item.recycler' }
  }
};