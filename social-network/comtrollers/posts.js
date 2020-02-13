const post = require('../models/posts');

exports.creat = (req, res) => {
    try {
        const newPost = new post({
            title : req.body.title,
            body : req.body.body,
            author : {
                id : req.body.id
            }

        });
        newPost.save();

        res.send("new post is crated");
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

exports.edit = (req, res) => {
    try {
        post.findByIdAndUpdate(req.params.id, req.body, (err,doc) => {
            if(err){

            }else{
                res.send(" you post is updated");
            }
        });
       
    } catch (error) {
        res.send(error);
    }
}

exports.delete = (req, res) => {
    try {
        post.findByIdAndDelete(req.params.id,(err) => {
            if(err){

            }
            res.send("you post is deleted");
        })
    } catch (error) {
        res.send(error)
    }
}

exports.getYouPosts = (req, res) => {
    try {
   
    } catch (error) {
        
    }
}