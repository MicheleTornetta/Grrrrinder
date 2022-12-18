const router = require('express').Router();
const { Dog, Owner } = require('../../models');
const checkAuth = require("../auth/authentication");
const { Op } = require('sequelize');

// GET all dogs & GET dogs based on specific search criteria
router.get('/', async (req, res) => {
    try {
        const queryFields = ["dog_gender", "dog_size", "dog_age", "dog_vaccinations", "dog_neuter_spayed","dog_temperment", "preferred_days", "preferred_timeofday", "preferred_location"] //if we only want to search for 'all dogs' we would just leave this array empty.
        const query = {}
        queryFields.forEach ((queryField)=>{
            if (req.query[queryField]){
                query[queryField]= req.query[queryField]
            }
        })
        const dogData = await Dog.findAll({
            where: query
        });
        if (!dogData) {
            res.status(404).json({ message: "No dogs found meeting that search criteria" });
            return;
        }
        res.status(200).json(dogData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// // GET dogs based on specific search criteria
// router.get('/:one/:two:/:three/:four/:five/:six/:seven/:eight/:nine', async (req, res) => {
//     try {
//         const dogData = await Dog.findAll({
//             where: { //need two different versions of this per Anthony? 
//                 [Op.or]: [ //and is not working here but we had it working with an or at one point but now that isn't working either :()
//                     { dog_gender: req.params.one },
//                     { dog_size: req.params.two},
//                     { dog_age: req.params.three },
//                     { dog_vaccinations: req.params.four },
//                     { dog_neuter_spayed: req.params.five },
//                     { dog_temperment: req.params.six },
//                     { preferred_days: req.params.seven },
//                     { preferred_timeofday: req.params.eight },
//                     { preferred_location: req.params.nine },
//                 ]
//             }
//         })

//         if (!dogData) {
//             res.status(404).json({ message: "No dogs found meeting that search criteria" });
//             return;
//         }
//         res.status(200).json(dogData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// CREATE new dog profile 
router.post('/', checkAuth, async (req, res) => {
    try {
        const dogData = await Dog.create({
            owner_id: req.session.owner,
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
router.put('/:id', checkAuth, async (req, res) => {
    try {
         const dogData = await Dog.update(req.body, {

            where: {
                owner_id: req.session.owner,
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
router.delete('/:id', checkAuth, async (req, res) => {
    try {
        const dogData = await Dog.destroy({
            where: {
                owner_id: req.session.owner,
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

