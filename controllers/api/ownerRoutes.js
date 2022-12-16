const router = require('express').Router();
const { Dog, Owner } = require('../../models');

// GET owners
router.get('/', async (req, res) => {
    try {
        const ownerData = await Owner.findAll({
            
        });
        res.status(200).json(ownerData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// CREATE owner account
router.post('/', async (req, res) => {
    try {
        const ownerData = await Owner.create(req.body) /

        res.status(200).json(ownerData);

    } catch (err) {
        res.status(500).json(err);
    }
});


// DELETE owner account
router.delete('/:id', async (req, res) => {
    try {
        const ownerData = await Owner.destroy({
        where: {
            id: req.params.id,
        }
    })
        if (!ownerData) {
            res.status(404).json({ messsage: "No account with this login information"});
            return;
        }
        res.status(200).json(ownerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

