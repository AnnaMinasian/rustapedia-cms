const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
require('dotenv').config();

//const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const PROJECT_NAME = "rustapedia";
const UserSchema = require('./lists/User.js');
const ItemSchema = require('./lists/Item.js');
const CategorySchema = require('./lists/Category.js');
const LootSchema = require('./lists/Loot.js');
const ContainerSchema = require('./lists/Container.js');
const MainInfoSchema = require('./lists/MainInfo.js');
const WeaponInfoSchema = require('./lists/WeaponInfo.js');
const FoodInfoSchema = require('./lists/FoodInfo.js');
const CraftSchema = require('./lists/Craft.js');
const ItemCountSchema = require('./lists/ItemCount.js');
const RepairSchema = require('./lists/Repair.js');

/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
});

keystone.createList('User', UserSchema);
keystone.createList('Item', ItemSchema);
keystone.createList('Category', CategorySchema);
keystone.createList('Loot', LootSchema);
keystone.createList('Container', ContainerSchema);
keystone.createList('MainInfo', MainInfoSchema);
keystone.createList('FoodInfo', FoodInfoSchema);
keystone.createList('WeaponInfo', WeaponInfoSchema);
keystone.createList('Craft', CraftSchema);
keystone.createList('ItemCount', ItemCountSchema);
keystone.createList('Repair', RepairSchema);
/*
const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});*/

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ enableDefaultRoute: true })],
};
