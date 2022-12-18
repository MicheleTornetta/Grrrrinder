const router = require ('express').Router();

router.get('/', function(req, res){
    console.log(req.session);
    if (!req.session || !req.session.user) {
        res.render('login', {
            user: req.session.user
        });
    }
    else {
        res.render('home', {
            user: req.session.user
        });
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

// router.get('/matchandmeet', function(req, res){
//     res.render('matchandmeet');

// });

module.exports = router;