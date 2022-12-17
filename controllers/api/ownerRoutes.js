const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Dog, Owner } = require('../../models');
const checkAuth = require('../auth/authentication');

// GET owners
router.get('/', checkAuth, async (req, res) => {
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
router.post('/', checkAuth, async (req, res) => {
    try {
        const ownerData = await Owner.create(req.body) /

        res.status(200).json(ownerData);

    } catch (err) {
        res.status(500).json(err);
    }
});


// DELETE owner account
router.delete('/:id', checkAuth, async (req, res) => {
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

