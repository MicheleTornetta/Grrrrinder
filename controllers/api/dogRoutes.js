const router = require('express').Router();
const { Dog, Owner } = require('../../models');
const { Op } = require('sequelize');

// GET all dogs 
router.get('/', async (req, res) => {
    try {
        const dogData = await Dog.findAll({

        });
        res.status(200).json(dogData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// GET dogs based on specific search criteria
router.get('/', async (req, res) => {
    try {
        const dogData = await Dog.findAll({
            where: { //need two different versions of this per Anthony? 
                [Op.or]: [ //is or correct here? 
                    { dog_gender: req.params.dog_gender },
                    { dog_size: req.params.dog_size },
                    { dog_age: req.params.dog_age },
                    { dog_vaccination: req.params.dog_vaccination },
                    { dog_neuter_spayed: req.params.dog_neuter_spayed },
                    { dog_temperment: req.params.dog_temperment },
                    { preferred_days: req.params.preferred_days },
                    { preferred_timeofday: req.params.preferred_timeofday },
                    { preferred_location: req.params.preferred_location },
                ]
            }
        })

        if (!dogData) {
            res.status(404).json({ message: "No dogs found meeting that search criteria" });
            return;
        }
        res.status(200).json(dogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

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
            res.status(404).json({ messsage: "No dog with this ID" });
            return;
        }
        res.status(200).json(dogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

