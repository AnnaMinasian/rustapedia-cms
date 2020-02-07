const { Text, Relationship, Select } = require('@keystonejs/fields');

module.exports = {
  fields: {
      repairTool: { type: Relationship, ref: 'Item' },
      repairCoast: { type: Relationship, ref: 'ItemCount', many: true },
      condition: { type: Text },
      blueprintRequired: { type: Select, options: 'Yes, No' },
  }
};