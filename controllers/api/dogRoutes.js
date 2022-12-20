const router = require('express').Router();
const { Dog, Owner } = require('../../models');
const checkAuth = require("../auth/authentication");
const { Op } = require('sequelize');
require('dotenv').config();
const nodemailer = require('nodemailer');

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

// CREATE new dog profile 
router.post('/', checkAuth, async (req, res) => {
    try {
        console.log(req.body)
        const dogData = await Dog.create({
            owner_id: req.session.owner,
            dog_name: req.body.dog_name,
            dog_breed: req.body.dog_breed,
            dog_gender: req.body.dog_gender,
            dog_size: req.body.dog_size,
            dog_age: req.body.dog_age,
            dog_vaccinations: req.body.dog_vaccinations==="yes"?true:false,
            dog_neuter_spayed: req.body.dog_neuter_spayed==="yes"?true:false,
            dog_temperment: req.body.dog_temperment,
            dog_notes: req.body.dog_notes,
            dog_picture: req.body.dog_picture,
            preferred_days: req.body.preferred_days==="yes"?true:false,
            preferred_timeofday: req.body.preferred_timeofday,
            preferred_location: req.body.preferred_location,
        }); 

        res.status(200).json(dogData);

    } catch (err) {
        console.log(err)
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

//post request for email contact
router.post('/contact', checkAuth, async (req, res) => {
    try {
        const owner = await Owner.findByPk(req.session.user)
        const dogOwner = await Owner.findByPk(req.body.owner)

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL_ADDRESS,
              pass: process.env.EMAIL_PASSWORD,
            }
          });

          const mailOptions = {
            from: 'grrrrinderdogmeetup@gmail.com',
            to: dogOwner.email,
            subject: 'My dog wants to meet your dog',
            text: 'If your dog is interested, please email me at ' + dogOwner.email + '. Thanks, ' + dogOwner.name + '.' 
        
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;

