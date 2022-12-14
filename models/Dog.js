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
        type: DataTypes.DECIMAL(2,0), //maximum age is 15 years old.
        allowNull: false,
        validate: {
            isDecimal: true,
        }
       },
       //dog_vaccinations:
       dog_vaccinations: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
       },
       //dog_neuter_sprayed:
       dog_neuter_sprayed: {
        type: DataTypes.BOOLEAN,
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
    //    dog_picture:
          dog_picture: {
          type: DataTypes.STRING,
          //will need to add the URL to cloudinary 
            //https://cloudinary.com/ip/gr-sea-gg-brand-home-base?utm_source=google&utm_medium=search&utm_campaign=goog_selfserve_brand_wk22_replicate_core_branded_keyword&utm_term=1329&campaignid=17601148700&adgroupid=141182782954&keyword=cloudinary&device=c&matchtype=e&adposition=&gclid=CjwKCAiAheacBhB8EiwAItVO2xJwiDyMd9ZMVPW9rZ7ReTcrEWq63OhxRKT4Sij03qDannvP6S55vRoCNaoQAvD_BwE
       },

    //owner_id
       owner_id: {
        type: DataTypes.INTEGER,
         // * References the `Owner` model's `id`.
        references: {
            model: 'owner',
            key: 'id',
        },
       },
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