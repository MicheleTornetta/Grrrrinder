const router = require('express').Router();
const { Dog, Owner } = require('../../models');
const { Op } = require('sequelize');
const checkAuth = require("../auth/authentication");

// GET all dogs 
router.get('/', async (req, res) => {
    try {
        const dogData = await Dog.findAll({
            // owner_id: req.session.owner,
        });
        res.status(200).json(dogData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// GET dogs based on specific search criteria
router.get('/:one/:two:/:three/:four/:five/:six/:seven/:eight/:nine', checkAuth, async (req, res) => {
    try {
        const dogData = await Dog.findAll({
            // owner_id: req.session.owner,
            where: { //need two different versions of this per Anthony? 
                [Op.and]: [ //and is not working here but we had it working with an or at one point but now that isn't working either :()
                    { dog_gender: req.params.one },
                    { dog_size: req.params.two},
                    { dog_age: req.params.three },
                    { dog_vaccinations: req.params.four },
                    { dog_neuter_spayed: req.params.five },
                    { dog_temperment: req.params.six },
                    { preferred_days: req.params.seven },
                    { preferred_timeofday: req.params.eight },
                    { preferred_location: req.params.nine },
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
        const dogData = await Dog.create({
            // owner_id: req.session.owner,
            dog_id: req.params.id,
            dog_name: req.body.dog,
            dog_breed: req.body.dog,
            dog_gender: req.body.dog,
            dog_size: req.body.dog,
            dog_age: req.body.dog,
            dog_vaccinations: req.body.dog,
            dog_neuter_spayed: req.body.dog,
            dog_temperment: req.body.dog,
            dog_notes: req.body.dog,
            dog_picture: req.body.dog,
            preferred_days: req.body.dog,
            preferred_timeofday: req.body.dog,
            preferred_location: req.body.dog,
        }); 

        res.status(200).json(dogData);

    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDTATE dog profile 
router.put('/:id', async (req, res) => {
    try {
        // owner_id: req.session.owner,
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
            // owner_id: req.session.owner,
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

