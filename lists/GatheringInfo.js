const { Relationship, Integer, Text } = require("@keystonejs/fields");

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
    fromItem: { type: Relationship, ref: "Item.gatheringInfo" },
    tool: { type: Relationship, ref: "Item.gather" },
    result: { type: Relationship, ref: "ItemCount", many: true },
    time: { type: Text },
    conditionLoss: { type: Integer },
  },
};
