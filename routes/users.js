const router = require('express').Router();
const User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json('error ', err))
});

router.route('/add').post((req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    const newUser = new User({ name, age});
    newUser.save()
        .then(() => res.json("user added"))
        .catch((err) => res.status(400).json('error ', err))
})

module.exports = router;