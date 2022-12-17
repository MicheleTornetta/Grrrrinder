const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Dog, Owner } = require('../../models');
const checkAuth = require('../auth/authentication');

// GET owners
router.get('/', checkAuth, async (req, res) => {
    try {
        const userData = await Owner.findAll({
            where: {
                id: req.session.user
            }
        });
        res.status(200).json({
            name: userData.name,
            id: userData.id,
            location: userData.location,
            email: userData.email,
            username: userData.username,
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// CREATE user account
router.post('/', checkAuth, async (req, res) => {
    try {
        const newUser = req.body;
        if (newUser.password?.length < 8) {
          res.status(400).json({err: "Password must be at least 8 characters."});
          return;
        }
        // create the newuser with the hashed password and save to DB
        const userData = await Owner.create(newUser);
    
        req.session.user = userData.id;
        req.session.lastSeen = Date.now();
    
        res.status(200).json({
            name: userData.name,
            id: userData.id,
            location: userData.location,
            email: userData.email,
            username: userData.username,
        });
      } catch (err) {
        res.status(400).json(err);
      }
    });

    // LOGIN user
// POST /api/users/login
router.post('/login', async (req, res) => {
    try {
      const user = req.body;
      if (!user.username) {
        res.status(400).json({
          'err': "Missing username"
        });
        return;
      }
  
      if (!user.password) {
        res.status(400).json({
          'err': "Missing password"
        });
        return;
      }
      
      const userData = await Owner.findOne({
        where: {
          username: user.username,
        }
      });
  
      if (userData) {
        if (await bcrypt.compare(user.password, userData.password)) {
          req.session.user = userData.id;
          req.session.lastSeen = Date.now();
  
          res.status(200).json({
            username: userData.username,
            email: userData.email,
            id: userData.id
          });
        }
        else {
          res.status(400).json({
            'err': 'Invalid password!',
          });
        }
      }
      else {
        res.status(400).json({
          'err': 'Unable to find user with that username!',
        });
      }
    } catch (err) {
      res.status(400).json(err);
    }
  });

// DELETE user account
router.delete('/', checkAuth, async (req, res) => {
    try {
        const userData = await Owner.destroy({
        where: {
            id: req.session.user,
        }
    })
        if (!userData) {
            res.status(404).json({ messsage: "No account with this login information"});
            return;
        }
        res.status(200).json({
            "success": true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

