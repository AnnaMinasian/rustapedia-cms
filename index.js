const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
require('dotenv').config();
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const PROJECT_NAME = "rustapedia";
const UserSchema = require('./lists/User.js');
const ItemSchema = require('./lists/Item.js');
const SubCategorySchema = require('./lists/SubCategory.js');
const LootInfoSchema = require('./lists/LootInfo.js');
const MainInfoSchema = require('./lists/MainInfo.js');
const WeaponInfoSchema = require('./lists/WeaponInfo.js');
const FoodInfoSchema = require('./lists/FoodInfo.js');
const CraftSchema = require('./lists/Craft.js');
const ResearchInfoSchema = require('./lists/ResearchInfo.js');
const ItemCountSchema = require('./lists/ItemCount.js');
const ExperimentSchema = require('./lists/Experiment.js');
const RepairSchema = require('./lists/Repair.js');
const RecycleSchema = require('./lists/Recycle.js');
const DurabilityInfoSchema = require('./lists/DurabilityInfo.js');
const CookingInfoSchema = require('./lists/CookingInfo.js');
const IngredientInfoSchema = require('./lists/IngredientInfo.js');
const GatheringInfoSchema = require('./lists/GatheringInfo.js');
const DamageInfoSchema = require('./lists/DamageInfo.js');
const CategorySchema = require('./lists/Category.js');
const ItemInfoSchema = require('./lists/ItemInfo.js');

/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
  cookie: {
    secure: true,
  },
  cookieSecret: process.env.COOKIE_SECRET
});
keystone.createList('User', UserSchema);
keystone.createList('Item', ItemSchema);
keystone.createList('SubCategory', SubCategorySchema);
keystone.createList('LootInfo', LootInfoSchema);
keystone.createList('MainInfo', MainInfoSchema);
keystone.createList('FoodInfo', FoodInfoSchema);
keystone.createList('WeaponInfo', WeaponInfoSchema);
keystone.createList('Recycle', RecycleSchema);
keystone.createList('Craft', CraftSchema);
keystone.createList('Experiment', ExperimentSchema);
keystone.createList('ItemCount', ItemCountSchema);
keystone.createList('ResearchInfo', ResearchInfoSchema);
keystone.createList('Repair', RepairSchema);
keystone.createList('DurabilityInfo', DurabilityInfoSchema);
keystone.createList('CookingInfo', CookingInfoSchema);
keystone.createList('IngredientInfo', IngredientInfoSchema);
keystone.createList('GatheringInfo', GatheringInfoSchema);
keystone.createList('DamageInfo', DamageInfoSchema);
keystone.createList('Category', CategorySchema);
keystone.createList('ItemInfo', ItemInfoSchema);


const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ enableDefaultRoute: true, authStrategy })],
  configureExpress: app => {
    app.set('trust proxy', 1);
  }
};
