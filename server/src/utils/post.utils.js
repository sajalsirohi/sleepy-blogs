const Post = require("../database/models/post.model");
const User = require("../database/models/user.model");
const Comment = require("../database/models/comments.model");
function createPost(req, res) {
  const { query } = req;
  const newPost = new Post({ ...query });
  newPost.save((err, post) => {
    if (err)
      return res.send({
        error: err,
        status: "error",
      });
    res.send(post);
  });
}

async function getPostPageDetails(req, res) {
  var {
    params: { postId },
  } = req;
  console.log("accessed this part")
  Post.findByIdAndUpdate(
    postId,
    { $inc: { views: 1 } },
    { new: true, useFindAndModify: false }
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
          console.log(comment)
        });
    });
  });
}

module.exports = {
  createPost: createPost,
  getPostPageDetails: getPostPageDetails,
};
