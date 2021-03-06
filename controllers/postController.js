// const { Post } = require("../models");
const db = require("../models");
console.log("testing 4");
module.exports = {
    //retrieve all posts
    findAll: function (req, res) {
        console.log("I am here")
        db.Post
            .find(req.query)
            .populate("author", "_id username")  //populate author of this post, only show id and username
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //look up all posts of a specific user
    findByUserId: function (req, res) {
        db.Post
            .findById({ author: req.user._id })
            .populate("author", "_id username")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //look up a specific post

    findById: function (req, res) {
        db.Post
            .findById({ _id: req.params.id })
            .populate("author", "_id username")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //create post ???
    create: function (req, res) {
        db.Post
            .create(req.body)
            //.then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //update post with info of user who accept the challenge

    accept: function (req, res) {
        db.Post //postId from front end
            .findByIdAndUpdate(req.body.postId, {
                $push: { acceptedBy: req.user._id }
            }, {
                new: true
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },

    remove: function (req, res) {
        db.Post
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};

