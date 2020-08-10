const { Text, Integer, Relationship, Select } = require("@keystonejs/fields");

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
    type: { type: Select, options: "Explosive, Melle, Guns, Throwing, SAM" },
    item: { type: Relationship, ref: "Item" },
    ammo: { type: Relationship, ref: "Item" },
    weapon: { type: Relationship, ref: "Item" },
    text: { type: Text },
    time: { type: Text },
    fuelNeeded: { type: Integer },
    sulfurNeeded: { type: Integer },
    quantity: { type: Text },
  },
};
