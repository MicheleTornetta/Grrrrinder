const { Meetup } = require('../models');

const meetupData = [
    {
        preferred_dates: "Monday",
        preffered_times: "Afternoon",
        preferred_location: "19147"
    },
    {
        preferred_dates: "Tuesday",
        preffered_times: "Morning",
        preferred_location: "19125"
    },
    {
        preferred_dates: "Saturday",
        preffered_times: "Evening",
        preferred_location: "19145"
    },
    {
        preferred_dates: "Wednesday",
        preffered_times: "Afternoon",
        preferred_location: "19147"
    },
    {
        preferred_dates: "Friday",
        preffered_times: "Morning",
        preferred_location: "19125"
    }

]

const seedMeetup = () => Meetup.bulkCreate(meetupData);

module.exports = seedMeetup;