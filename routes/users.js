const router = require('express').Router();
const User = require('../models/user.model');

//Get Users from DataBase
router.route('/').get((req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json('error ', err))
});

//add users to Database
router.route('/add').post((req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    const newUser = new User({ name, age });
    newUser.save()
        .then(() => res.json("user added"))
        .catch((err) => res.status(400).json('error ', err))
})

//Delete User From DataBase
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => console.log("User deleted"))
        .catch((err) => res.status(400).json(err))
})

module.exports = router;