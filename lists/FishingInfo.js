const { Integer, Relationship, Text } = require("@keystonejs/fields");

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
    trap: { type: Relationship, ref: "Item.fishing" },
    catch: { type: Relationship, ref: "Item.caughtBy" },
    amount: { type: Text },
    baitCalories: { type: Integer },
    bait: { type: Relationship, ref: "Item" },
  },
};
