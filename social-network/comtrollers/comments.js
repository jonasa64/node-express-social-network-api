const comment = require('../models/comments');
exports.add = (req, res) => {
    try {
        const newComment = comment({

        });
        newComment.save();
        res.send(newComment);
    }catch (error) {
        res.send('error tyring to add your comment');
    }
}

exports.delete = (req, res) => {
    try {
        comment.findByIdAndDelete();
        res.send('your comment was delete successfully');
    }catch (error) {
        res.send('there was an error trying to delete your comment');
    }
}

exports.edit = (req, res) => {
    try {

    }catch (e) {

    }
}