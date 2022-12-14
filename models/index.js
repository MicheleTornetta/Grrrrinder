//import models
const Dog = require('./Dog');
const DogMeetUp = require('./DogMeetUp');
const MeetUp = require('./Meetup');
const Owner = require('./Owner');


// A meetup can have more than one dog 
MeetUp.belongsToMany(Dog, {
    through: DogMeetUp,
    foreignKey: "meetup_id",
    onDelete: 'CASCADE',
});

Dog.belongsToMany(MeetUp, {
    through: DogMeetUp,
    foreignKey: "dog_id",
    onDelete: 'CASCADE'
});

// An owner can have many dogs
Owner.hasMany(Dog, {
    foreignKey: 'owner_id',
    onDelete: 'CASCADE',
});

// A dog can only have one owner
Dog.belongsTo(Owner, {
    foreignKey: 'owner_id',
    onDelete: 'CASCADE',
});

module.exports = {
    Dog,
    DogMeetUp,
    MeetUp,
    Owner,
};