const { Select, Relationship, Float, Text } = require("@keystonejs/fields");

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
    weapon: { type: Relationship, ref: "Item.damageInfo" },
    ammunition: { type: Relationship, ref: "Item.ammoFor" },
    attack: { type: Select, options: "Melee, Torch Ignited, Throw" },
    damage: { type: Text },
    dps: { type: Text },
    headShot: { type: Float },
    aimCone: { type: Float },
    spread: { type: Float },
    velocity: { type: Text },
  },
};
