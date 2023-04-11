require("dotenv").config();
const { Sequelize } = require('sequelize');
const FavoritModels = require('./models/Favorites');
const UserModels = require('./models/User')
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);

FavoritModels(sequelize)
UserModels(sequelize)

const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: "user_favorite" })
Favorite.belongsToMany(User, { through: "user_favorite" })


module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
