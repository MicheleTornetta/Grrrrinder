const router = require ('express').Router();

router.get('/', function(req, res){
    console.log(req.session);
    if (!req.session || !req.session.user) {
        res.render('login');
    }
    else {
        res.render('home');
    }
});

router.get('/signup', function(req, res){
    res.render('signup');

});

router.get('/login', function(req, res){
    res.render('login');

});

router.get('/addadog', function(req, res){
    res.render('addadog');

});

// router.get('/matchandmeet', function(req, res){
//     res.render('matchandmeet');

// });

module.exports = router;