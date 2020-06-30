const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, "A title is required"],
    trim: true,
  },
  content: {
    type: String,
    required: [true, "Minimum 50 words are required"],
  },
  tags: {
    type: Array,
    required: false,
    default: ["all"],
  },
  categories: {
    type: Array,
    required: [true, "At least one category to be given"],
  },
  author_user_id: {
    type: Schema.Types.ObjectId,
    required: [true, "Provide the user name of the author"],
    trim: true,
    ref: "User",
  },
  comment_ids: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  likes: {
    type: Number,
    default: 0,
  },
  shares: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 1,
  },
  liked_by: [{ type: Schema.Types.ObjectId, ref: "User" }],
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
