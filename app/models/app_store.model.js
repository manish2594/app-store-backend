module.exports = (sequelize, Sequelize) => {
    const AppStore = sequelize.define("app_stores", {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      filePath: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }
    });
  
    return AppStore;
  };