const router = require('express').Router();
let Exercise = require('../models/exercise.model');

//handles incoming http get requests
router.route('/').get((req, res) => {
    Exercise.find() // gets list of all exercises
    .then(exercises => res.json(exercises)) // gets exercises and exercises users in json format
    .catch(err => res.status(400).json('Error: ' + err));
});

//handles incoming http post requests
router.route('/add').post((req, res) => {
    const username = req.body.username; //passes string
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save() // new user is saved
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => { //:id is like a variable
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(exercise => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username; // assigns new variables to the exercise entry that already exists
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save()
        .then(() => res.json('Exercise upated!'))
        .catch(err => res.status(400).json('Error: ' + err));

    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
