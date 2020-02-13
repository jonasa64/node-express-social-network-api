const user = require('../models/users');

exports.creat = (req, res) => {
    try {
        const newUser = user({
            email : req.body.email,
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            password : req.body.lastName,
            dayOfBirth : req.body.dayOfBirth,
            image : req.body.image


        });
        newUser.save();
        res.send('user is created');
    } catch (error) {
        res.send(error);
        
    }
}