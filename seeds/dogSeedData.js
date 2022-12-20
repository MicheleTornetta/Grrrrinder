const { Dog } = require('../models');

const dogData = [
    {
        dog_name: "Pigeon",
        dog_breed: "Beagle",
        dog_gender: "Female",
        dog_size: "Small",
        dog_age: "Senior",
        dog_vaccinations: 1,
        dog_neuter_spayed: 1,
        dog_temperment: "Shy",
        dog_notes: "She would prefer another female, smaller dog to play with",
        dog_picture: "https://res.cloudinary.com/dh82x6mau/image/upload/v1671070887/kiaatkrq1tfsgojzmfsb",
        owner_id: 1,
        preferred_days: "Monday",
        preferred_timeofday: "Evening",
        preferred_location: 19147
    },
    {
        dog_name: "Beans",
        dog_breed: "Mix",
        dog_gender: "Female",
        dog_size: "Medium",
        dog_age: "Adult",
        dog_vaccinations: 1,
        dog_neuter_spayed: 1,
        dog_temperment: "Calm",
        dog_notes: "She would prefer another female dog",
        dog_picture: "http://res.cloudinary.com/dh82x6mau/image/upload/v1671138429/dn1rsebxgo1hlhifvkxs", 
        owner_id: 2,
        preferred_days: "Tuesday",
        preferred_timeofday: "Afternoon",
        preferred_location: 19125
    },
    {
        dog_name: "Chili",
        dog_breed: "Pitbull",
        dog_gender: "Male",
        dog_size: "Large",
        dog_age: "Adult",
        dog_vaccinations: 1,
        dog_neuter_spayed: 1,
        dog_temperment: "Energetic",
        dog_notes: "Gets along with all dogs and people",
        dog_picture: "https://res.cloudinary.com/dh82x6mau/image/upload/v1671139291/wzyx06xmhdgrbttt5oim",
        owner_id: 3,
        preferred_days: "Wednesday",
        preferred_timeofday: "Morning",
        preferred_location: 19145
    },
    {
        dog_name: "Toby",
        dog_breed: "Cocker Spaniel",
        dog_gender: "Male",
        dog_size: "Medium",
        dog_age: "Puppy",
        dog_vaccinations: 1,
        dog_neuter_spayed: 1,
        dog_temperment: "Outgoing",
        dog_notes: "He would perfer a smaller, calmer dog to meet with",
        dog_picture: "https://res.cloudinary.com/dh82x6mau/image/upload/v1671139410/yv5ndyqoihfub2stesjy",
        owner_id: 4,
        preferred_days: "Thursday",
        preferred_timeofday: "Evening",
        preferred_location: 19145
    },
    {
        dog_name: "Rambo",
        dog_breed: "Mix",
        dog_gender: "Male",
        dog_size: "Medium",
        dog_age: "Youth",
        dog_vaccinations: 1,
        dog_neuter_spayed: 1,
        dog_temperment: "Leader",
        dog_notes: "Gender doesn't really matter, but it should be a slow introduction",
        dog_picture: "https://res.cloudinary.com/dh82x6mau/image/upload/v1671139503/y123v1mg2juna7r8cqkj", 
        owner_id: 5,
        preferred_days: "Friday",
        preferred_timeofday: "Afternoon",
        preferred_location: 19147
    }
];

const seedDogs = () => Dog.bulkCreate(dogData);

module.exports = seedDogs;
