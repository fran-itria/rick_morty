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
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
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
        userId: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timestamps: false });
};