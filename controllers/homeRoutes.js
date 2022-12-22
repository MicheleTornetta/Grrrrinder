const checkAuth = require('./auth/authentication');
const { Dog } = require('../models')
const { Op } = require('sequelize');

const router = require ('express').Router();

router.get('/', function(req, res){
    if (!req.session || !req.session.user) {
        res.render('login', {
            user: req.session.user
        });
    } 
});

router.get('/profile', async function(req, res){
    try {
        const dogData = await Dog.findAll({
          where: {
            owner_id: req.session.user,

          },
        });
    
        const dogs = dogData.map((dog) => dog.get({ plain: true }));

        res.render('profile', {
          dogs,
        });
      } catch (err) {
      }    
});

router.get('/signup', function(req, res){
    res.render('signup', {
        user: req.session.user
    });

});

router.get('/login', function(req, res){
    res.render('login', {
        user: req.session.user
    });

});

router.get('/addadog', function(req, res){
    res.render('addadog', {
        user: req.session.user
    });
});

router.get('/logout', function(req, res){
    req.session.user = undefined;
    req.session.lastSeen  = undefined;
    res.redirect('/');
});

router.get('/matchandmeet', function(req, res){
    res.render('matchandmeet', {
        user: req.session.user
    });
});

module.exports = router;
router.get('/logout', function(req, res){
    req.session.user = undefined;
    req.session.lastSeen  = undefined;
    res.redirect('/');
});


// GET all dogs & GET dogs based on specific search criteria
router.get('/matchresults', async (req, res) => {
    try {
        const queryFields = ["dog_gender", "dog_size", "dog_age", "dog_vaccinations", "dog_neuter_spayed","dog_temperment", "preferred_days", "preferred_timeofday", "preferred_location"] //if we only want to search for 'all dogs' we would just leave this array empty.
        const query = {}
        queryFields.forEach ((queryField)=>{
            if (req.query[queryField] && req.query[queryField] !== 'no_preference') {
                if (req.query[queryField] === 'yes') {
                    req.query[queryField] = true;
                }
                if (req.query[queryField] === 'no') {
                    req.query[queryField] = false;
                }

                query[queryField] = { [Op.eq]: req.query[queryField] }
            }
        });

        if (req.session.user) {
            query['owner_id'] = {
                [Op.ne]: req.session.user
            };
        }

        console.log(query);

        const dogData = await Dog.findAll({
            where: {
                [Op.and]: query
            }
        });

        const dogs = dogData.map(dog => dog.get({plain: true}));


        res.render('matchresults', {
            user: req.session.user,
            dogs,
            nodogs: dogs.length === 0
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Error :(');
    }
});

module.exports = router;
