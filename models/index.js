//import models
const Dog = require('./Dog');
const Owner = require('./Owner');

// An owner can have many dogs
Owner.hasMany(Dog, {
    foreignKey: 'owner_id',
    // onDelete: 'CASCADE',
});

// A dog can only have one owner
Dog.belongsTo(Owner, {
    foreignKey: 'owner_id',
    // onDelete: 'CASCADE',
});

module.exports = {
    Dog,
    Owner,
};