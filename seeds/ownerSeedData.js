const { Owner } = require('../models');

const ownerData = [
    {
        name: "Sam",
        location: "19147",
        email: "samsemail@gmail.com",
        username: "Sam",
        password: "123abc",
    },
    {
        name: "Olivia",
        location: "19125",
        email: "oliviassemail@gmail.com",
        username: "Oliva",
        password: "123abc",
    },
    {
        name: "Michelle",
        location: "19147",
        email: "michellesemail@gmail.com",
        username: "Michelle",
        password: "123abc",
    },
    {
        name: "Cass",
        location: "19125",
        email: "casssemail@gmail.com",
        username: "Cass",
        password: "123abc",
    },
    {
        name: "Amy",
        location: "19147",
        email: "amysemail@gmail.com",
        username: "Amy",
        password: "123abc",
    }
];

const seedOwner = () => Owner.bulkCreate(ownerData);

module.exports = seedOwner;
