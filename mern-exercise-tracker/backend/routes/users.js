const router = require('express').Router();
let User = require('../models/user.model');

//handles incoming http get requests
router.route('/').get((req, res) => {
    User.find() // gets list of all users
    .then(users => res.json(users)) // gets users and returns users in json format
    .catch(err => res.status(400).json('Error: ' + err));
});

//handles incoming http post requests
router.route('/add').post((req, res) => {
    const username = req.body.username; //passes string

    const newUser = new User({username}); // string is passed to db

    newUser.save() // new user is saved
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
