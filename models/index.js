//import models
const Dog = require('./Dog');
const DogMeetUp = require('./DogMeetUp');
const MeetUp = require('./Meetup');
const Owner = require('./Owner');

// A dog can go to many meetups  - many to many relationship 
Dog.hasMany(MeetUp, {
    foreignKey: 'meetup_id',
});

// A meetup can have more than one dog 
MeetUp.belongsToMany(Dog, {
    through: DogMeetUp,
    foreignKey: "meetup_id"
});

Dog.belongsToMany(MeetUp, {
    through: DogMeetUp,
    foreignKey: "dog_id"
});


module.exports = {
    Dog,
    DogMeetUp,
    MeetUp,
    Owner,
};