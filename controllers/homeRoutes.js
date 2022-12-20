const checkAuth = require('./auth/authentication');
const { Dog } = require('../models')

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
        console.log(req.session);
        const dogData = await Dog.findAll({
          where: {
            owner_id: req.session.userId,
          },
        });
    
        console.log(dogData)
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

module.exports = router;
