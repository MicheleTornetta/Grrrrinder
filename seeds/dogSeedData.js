const { Dog } = require('../models');

const dogData = [
    {
        dog_name: "Pigeon",
        dog_breed: "Beagle",
        dog_gender: "Female",
        dog_size: "Small",
        dog_age: "Senior",
        dog_vaccinations: "Yes",
        dog_neuter_spayed: "Yes",
        dog_temperment: "Shy",
        dog_notes: "She would prefer another female, smaller dog to play with",
        dog_picture: "Still figuring this one out",
        owner_id: 1,
        preferred_days: "Monday",
        preferred_times: "Evening",
        preferred_location: 19147
    },
    {
        dog_name: "Beans",
        dog_breed: "Mix",
        dog_gender: "Female",
        dog_size: "Medium",
        dog_age: "Adult",
        dog_vaccinations: "Yes",
        dog_neuter_spayed: "Yes",
        dog_temperment: "Calm",
        dog_notes: "She would prefer another female dog",
        dog_picture: "Still figuring this one out", 
        owner_id: 2,
        preferred_days: "Tuesday",
        preferred_times: "Afternoon",
        preferred_location: 19125
    },
    {
        dog_name: "Chili",
        dog_breed: "Pitbull",
        dog_gender: "Male",
        dog_size: "Large",
        dog_age: "Adult",
        dog_vaccinations: "Yes",
        dog_neuter_spayed: "Yes",
        dog_temperment: "Energetic",
        dog_notes: "Gets along with all dogs and people",
        dog_picture: "Still figuring this one out",
        owner_id: 3,
        preferred_days: "Wednesday",
        preferred_times: "Morning",
        preferred_location: 19145
    },
    {
        dog_name: "Toby",
        dog_breed: "Cocker Spaniel",
        dog_gender: "Male",
        dog_size: "Medium",
        dog_age: "Puppy",
        dog_vaccinations: "Yes",
        dog_neuter_spayed: "Yes",
        dog_temperment: "Outgoing",
        dog_notes: "He would perfer a smaller, calmer dog to meet with",
        dog_picture: "Still figuring this one out",
        owner_id: 4,
        preferred_days: "Thursday",
        preferred_times: "Evening",
        preferred_location: 19145
    },
    {
        dog_name: "Rambo",
        dog_breed: "Mix",
        dog_gender: "Male",
        dog_size: "Medium",
        dog_age: "Youth",
        dog_vaccinations: "Yes",
        dog_neuter_spayed: "Yes",
        dog_temperment: "Leader",
        dog_notes: "Gender doesn't really matter, but it should be a slow introduction",
        dog_picture: "Still figuring this one out", 
        owner_id: 5,
        preferred_days: "Saturday",
        preferred_times: "Afternoon",
        preferred_location: 19147
    }
];

const seedDogs = () => Dog.bulkCreate(dogData);

module.exports = seedDogs;
