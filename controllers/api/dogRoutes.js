const router = require('express').Router();
const { Dog, Meetup, Owner } = require('../../models');

// GET all dogs 
router.get('/', async (req, res) => {
    try {
        const dogData = await Dog.findAll({
            include: [{ model: Meetup }]
        });
        res.status(200).json(dogData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// GET dogs based on specific search criteria - figure out how to get the search criteria in here 
// router.get('/:??', async (req, res) => { 
//     try {
//       const dogData = await Dog.findByPk(req.params.??, {
//         incldue: [{ model: Meetup }],
//       })

//       if (!dogData) {
//         res.status(404).json({ message: "No dogs found meeting that search criteria"});
//         return;
//       }
//       res.status(200).json(dogData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//     });

// CREATE new dog profile 
router.post('/', async (req, res) => {
    try {
        const dogData = await Dog.create(req.body) //unsure if I need to put all of the questions in here

        res.status(200).json(dogData);

    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDTATE dog profile 
router.put('/:id', async (req, res) => {
    try {
        const dogData = await Dog.update(req.body, {
            //   dog_name: req.body.dog_name,
            //   dog_breed: req.body.dog_breed,
            //   dog_gender: req.body.dog_gender,
            //   dog_size: req.body.dog_size,
            //   dog_age: req.body.dog_age,
            //   dog_vaccinations: req.body.dog_vaccinations,
            //   dog_neuter_spayed: req.body.dog_neuter_spayed,
            //   dog_temperment: req.body.dog_temperment,
            //   dog_notes: req.body.dog_notes,
            //   dog_picture: req.body.dog_picture, //not sure how to do this yet
            where: {
                id: req.params.id,
            }
        });
        if (!dogData[0]) {
            res.status(404).json({ message: "No dog with this ID" });
            return;
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE dog profile
router.delete('/:id', async (req, res) => {
    try {
        const dogData = await Dog.destroy({
        where: {
            id: req.params.id,
        }
    })
        if (!dogData) {
            res.status(404).json({ messsage: "No dog with this ID"});
            return;
        }
        res.status(200).json(dogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

