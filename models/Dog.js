const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dog extends Model {}

Dog.init(
    {
       //id:
       id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
       },
       //dog_name:
       dog_name: {
        type: DataTypes.STRING,
        allowNull: false,
       },
       //dog_breed:
       dog_breed: {
        type: DataTypes.STRING,
        allowNull: false,
       },
       //dog_gender:
       dog_gender: {
        type: DataTypes.STRING,
        allowNull: false,
       },
       //dog_size:
       dog_size: {
        type: DataTypes.STRING,
        allowNull: false,
       },
       //dog_age:
       dog_age: {
        type: DataTypes.DECIMAL(3,0), //maximum age is 999 years old.
        allowNull: false,
        validate: {
            isDecimal: true,
        }
       },
       //dog_vaccinations:
       dog_vaccinations: {
        type: DataTypes.STRING,
        allowNull: false,
       },
       //dog_neuter_sprayed:
       dog_neuter_sprayed: {
        type: DataTypes.STRING,
        allowNull: false,
       },
       //dog_temperment:
       dog_temperment: {
        type: DataTypes.STRING,
        allowNull: false,
       },
       //dog_notes:
       dog_notes: {
        type: DataTypes.STRING,
        allowNull: false,
       },
       //dog_picture: <- not sure if this is needed? Check w/tutor.
    //    dog_picture: {

    //    }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'dog',
    }
);

module.exports = Dog;


//https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/