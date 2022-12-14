const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Meetup extends Model {}

Meetup.init(
    {
         //id:
         id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
         },
         //preferred_dates:
         preferred_dates: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true, //only allows date strings
            }
         },
         //preferred_times:
         preferred_times: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         //preferred_location:
         preferred_location: {
            type: DataTypes.STRING, //since the location would be a string of numbers
            allowNull: false,
         },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'meetup',
    }
);

module.exports = Meetup;

//https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/