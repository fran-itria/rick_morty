const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Favorite', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.ENUM("Alive", "Dead", "Unknown"),
            defaultValue: "Alive",
        },
        origin: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        species: {
            type: DataTypes.STRING,
        },
    }, { timestamps: false });
};