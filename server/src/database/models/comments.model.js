const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  comment_made_by: {
    type: String,
    default: "Anonymous"
  },
  post_id: {
    type: String,
    require: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  body: {
    type: String,
    required: true,
    default: null,
  },
});

const Comment = mongoose.model("Comment", commentsSchema);
module.exports = Comment;
