const Comment = require("../database/models/comments.model");
const Post = require("../database/models/post.model");

function createComment(req, res) {
  var { query } = req;
  var comment = new Comment(query);
  comment.save((err, comment_) => {
    if (err) return console.error(err);
    Post.findByIdAndUpdate(
      comment_.post_id,
      { $push: { comment_ids: comment_._id } },
      {new: true},
      (err, doc) => console.log(err, doc)
    );
    res.send(comment_);
  });
}

module.exports = {
  createComment: createComment,
};
