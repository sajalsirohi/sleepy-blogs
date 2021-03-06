const Post = require("../database/models/post.model");
const User = require("../database/models/user.model");
const Comment = require("../database/models/comments.model");

function createPost(req, res) {
    const {query} = req;
    const newPost = new Post({...query});
    newPost.save((err, post) => {
        if (err)
            return res.send({
                error: err,
                status: 400,
            });
        res.send(post);
    });
}

async function getPostPageDetails(req, res) {
    var {
        params: {postId},
    } = req;
    Post.findByIdAndUpdate(
        postId,
        {$inc: {views: 1}},
        {new: true, useFindAndModify: false}
    ).then((post) => {
        User.findById(
            post.author_user_id,
            "username display_name profile_image_url"
        ).then((user) => {
            Comment.find()
                .where("_id")
                .in(post.comment_ids)
                .then((comment) => {
                    res.send({
                        post: post,
                        author_details: user,
                        comments: comment,
                    });
                });
        });
    });
}

async function handleLike(req, res) {
    const {
        params: {postId}, query
    } = req;
    Post.count({
        _id: postId,
        "liked_by": query._id
    }).then(count => {
        if (count === 0) Post.findByIdAndUpdate(
            postId,
            {$inc: {likes: 1}, $addToSet: {liked_by: query._id}},
            {new: true, useFindAndModify: false}
        ).then(post => res.send(post));
    });
}

async function getAllPosts(req, res) {
    console.log("accesed this part");
    Post.find()
        .then((posts) => {
            let newData = posts.map((post) =>
                User.find({_id: post.author_user_id})
                    .select("display_name username profile_image_url -_id")
                    .then((user) => {
                        const {_doc} = {...user[0]};
                        return ({post, ..._doc});
                    })
            );
            Promise.all(newData).then(values => res.send(values));
        });
}

module.exports = {
    createPost: createPost,
    getPostPageDetails: getPostPageDetails,
    likePost: handleLike,
    getAllPosts: getAllPosts,
};
