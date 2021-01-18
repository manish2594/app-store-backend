const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

db.app_stores = require("./app_store.model.js")(sequelize, Sequelize);

module.exports = db;