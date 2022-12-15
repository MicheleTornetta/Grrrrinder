const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DogMeetUp extends Model {}

DogMeetUp.init(
    {
        //id:
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        //dog_id:
        dog_id: {
            type: DataTypes.INTEGER,

            // * References the `Dog` model's `id`.
            references: {
                model: 'dog',
                key: 'id',
            },
        },
        //meetup_id:
        // meetup_id: {
        //     type: DataTypes.INTEGER,

        //        // * References the `Meetup` model's `id`.
        //     references: {
        //         model: 'meetup',
        //         key: 'id',
        //     },
        // },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'dog_meetup',
    }
);

module.exports = DogMeetUp;