const express = require('express');
const router = express.Router();
const Exercise = require('../models/exercise.model');

//Get All Data
router.route('/').get((req, res) => {
    Exercise.find()
        .then((exercises) => res.json(exercises))
        .catch((err) => res.status(400).json("Error : ", err))
})

//Get One Data from Database
router.route('/:id').get((req, res) => {
    Exercise.findById(req.param.id)
        .then((exercise) => res.json(exercise))
        .catch((err) => res.status(400).json(error))
})

//Add Data to DataBase
router.route('/add').post((req, res) => {
    const task = req.query.task;
    const time = req.query.time;
    const newExercise = new Exercise({ task, time });
    console.log(newExercise)
    newExercise.save()
        .then(() => res.json("new exercise saved!"))
});

//Updata Data from DataBase
router.route('/update:id').put((req, res) => {
    Exercise.findById(req.params.id)
        .then((exercise) => {
            const task = req.body.task;
            const time = req.body.time;
            exercise.task = task;
            exercise.time = time;
        })
        .catch((err) => res.status(400).json(err))
})

//Delete Data from DataBase
router.route('/:id').delete((req, res) => {
    Exercise.findOneAndDelete(req.params.id)
        .then(() => res.json("deleted"))
        .catch((err) => res.status(400).json(err))
})

module.exports = router;