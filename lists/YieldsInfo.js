const { Text, Float, Integer, Relationship } = require("@keystonejs/fields");

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
    monument: { type: Relationship, ref: "Item.yields" },
    resources: { type: Relationship, ref: "Item.extractedBy", many: true },
    amount: { type: Integer },
    time: { type: Text },
    fuel: { type: Relationship, ref: "ItemCount" },
    amountPerMinute: { type: Integer },
    type: { type: Text },
    resourcesPerHour: { type: Relationship, ref: "ItemCount", many: true },
  },
};
