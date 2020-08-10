const { Integer, Relationship, Float, Text } = require("@keystonejs/fields");

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
    item: { type: Relationship, ref: "Item" },
    count: { type: Float },
    range: { type: Text },
    percent: { type: Integer },
  },
};
