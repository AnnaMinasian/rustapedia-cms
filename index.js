const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
require("dotenv").config();
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const PROJECT_NAME = "rustapedia";
const UserSchema = require("./lists/User.js");
const ItemSchema = require("./lists/Item.js");
const SubCategorySchema = require("./lists/SubCategory.js");
const LootInfoSchema = require("./lists/LootInfo.js");
const MainInfoSchema = require("./lists/MainInfo.js");
const WeaponInfoSchema = require("./lists/WeaponInfo.js");
const FoodInfoSchema = require("./lists/FoodInfo.js");
const CraftSchema = require("./lists/Craft.js");
const ResearchInfoSchema = require("./lists/ResearchInfo.js");
const ItemCountSchema = require("./lists/ItemCount.js");
const ExperimentSchema = require("./lists/Experiment.js");
const RepairSchema = require("./lists/Repair.js");
const RecycleSchema = require("./lists/Recycle.js");
const DurabilityInfoSchema = require("./lists/DurabilityInfo.js");
const CookingInfoSchema = require("./lists/CookingInfo.js");
const IngredientInfoSchema = require("./lists/IngredientInfo.js");
const GatheringInfoSchema = require("./lists/GatheringInfo.js");
const DamageInfoSchema = require("./lists/DamageInfo.js");
const CategorySchema = require("./lists/Category.js");
const ItemInfoSchema = require("./lists/ItemInfo.js");
const CompostableSchema = require("./lists/Compostable.js");
const EquipmentInfoSchema = require("./lists/EquipmentInfo.js");
const BreedsInfoSchema = require("./lists/BreedsInfo.js");
const FeedingInfoSchema = require("./lists/FeedingInfo.js");
const ProduceInfoSchema = require("./lists/ProduceInfo.js");
const DropInfoSchema = require("./lists/DropInfo.js");
const CollectInfoSchema = require("./lists/CollectInfo.js");
const YieldsInfoSchema = require("./lists/YieldsInfo.js");
const FuelInfoSchema = require("./lists/FuelInfo.js");
const ShoppingSchema = require("./lists/Shopping.js");
const ModsInfoSchema = require("./lists/ModsInfo.js");
const AttireInfoSchema = require("./lists/AttireInfo.js");
const FishingInfoSchema = require("./lists/FishingInfo.js");

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
  cookieSecret: process.env.COOKIE_SECRET,
});

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User",
});

keystone.createList("User", UserSchema);
keystone.createList("Item", ItemSchema);
keystone.createList("SubCategory", SubCategorySchema);
keystone.createList("LootInfo", LootInfoSchema);
keystone.createList("MainInfo", MainInfoSchema);
keystone.createList("FoodInfo", FoodInfoSchema);
keystone.createList("WeaponInfo", WeaponInfoSchema);
keystone.createList("Recycle", RecycleSchema);
keystone.createList("Craft", CraftSchema);
keystone.createList("Experiment", ExperimentSchema);
keystone.createList("ItemCount", ItemCountSchema);
keystone.createList("ResearchInfo", ResearchInfoSchema);
keystone.createList("Repair", RepairSchema);
keystone.createList("DurabilityInfo", DurabilityInfoSchema);
keystone.createList("CookingInfo", CookingInfoSchema);
keystone.createList("IngredientInfo", IngredientInfoSchema);
keystone.createList("GatheringInfo", GatheringInfoSchema);
keystone.createList("DamageInfo", DamageInfoSchema);
keystone.createList("Category", CategorySchema);
keystone.createList("ItemInfo", ItemInfoSchema);
keystone.createList("Compostable", CompostableSchema);
keystone.createList("EquipmentInfo", EquipmentInfoSchema);
keystone.createList("BreedsInfo", BreedsInfoSchema);
keystone.createList("FeedingInfo", FeedingInfoSchema);
keystone.createList("ProduceInfo", ProduceInfoSchema);
keystone.createList("DropInfo", DropInfoSchema);
keystone.createList("CollectInfo", CollectInfoSchema);
keystone.createList("YieldsInfo", YieldsInfoSchema);
keystone.createList("FuelInfo", FuelInfoSchema);
keystone.createList("Shopping", ShoppingSchema);
keystone.createList("ModsInfo", ModsInfoSchema);
keystone.createList("AttireInfo", AttireInfoSchema);
keystone.createList("FishingInfo", FishingInfoSchema);

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ enableDefaultRoute: true, authStrategy }),
  ],
  configureExpress: (app) => {
    app.set("trust proxy", 1);
  },
};
