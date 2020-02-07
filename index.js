const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
//const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const PROJECT_NAME = "rustapedia";
const UsersSchema = require('./lists/Users.js');
const ItemsSchema = require('./lists/Items.js');
const CategoriesSchema = require('./lists/Categories.js');
const LootsSchema = require('./lists/Loots.js');
const ContainersSchema = require('./lists/Containers.js');
const MainInfosSchema = require('./lists/MainInfos.js');
const WeaponInfosSchema = require('./lists/WeaponInfos.js');
const FoodInfosSchema = require('./lists/FoodInfos.js');
const CraftsSchema = require('./lists/Crafts.js');
const ItemCountSchema = require('./lists/ItemCount.js');

/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
});

keystone.createList('User', UsersSchema);
keystone.createList('Item', ItemsSchema);
keystone.createList('Category', CategoriesSchema);
keystone.createList('Loot', LootsSchema);
keystone.createList('Container', ContainersSchema);
keystone.createList('MainInfo', MainInfosSchema);
keystone.createList('FoodInfo', FoodInfosSchema);
keystone.createList('WeaponInfo', WeaponInfosSchema);
keystone.createList('Craft', CraftsSchema);
keystone.createList('ItemCount', ItemCountSchema);
/*
const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});*/

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ enableDefaultRoute: true })],
};
