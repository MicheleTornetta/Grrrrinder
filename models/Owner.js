const { Models, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const SALT = 15;

class Owner extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Owner.init(
    {
    //id:
    id: {
        type: DataTypes.INTEGER, // * Integer.
        allowNull: false,  // * Doesn't allow null values.
        primaryKey: true, // * Set as primary key.
        autoIncrement: true,  // * Uses auto increment.
    },
    //name:
    name: {
        type: DataTypes.STRING, // * String
        allowNull: false,
    },
    //location:
    location: {
        type: DataTypes.STRING, //since the location would be a string of numbers
        allowNull: false, 
    },
    //email: 
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    //username
    username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    //password:
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        //Are we having a password length maximum/minimum?
            // validate: {
            //     len: [30],
            // },
        },
    },
    {   
        hooks: {
          beforeCreate: async (newOwnerData) => {
            newOwnerData.password = await bcrypt.hash(newOwnerData.password, 10);
            return newOwnerData;
          },
          beforeUpdate: async (updatedOwnerData) => {
            updatedOwnerData.password = await bcrypt.hash(updatedOwnerData.password, 10);
            return updatedOwnerData;
          },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'owner',
    }

);


module.exports = Owner;