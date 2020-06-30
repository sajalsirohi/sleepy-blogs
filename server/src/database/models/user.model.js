const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Provide a username"],
    unique: true,
    default: null,
  },
  display_name: {
    type: String,
    required: [true, "Provide a dsiplay name please"],
    default: null,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
    required: false,
  },
  profile_image_url: {
    type: String,
    default: "https://api.adorable.io/avatars/175/abott@adorable.png",
  },
  author_of_posts: [{ type: Schema.Types.ObjectId, default: [], ref: "Post" }],
  liked_posts: [{ type: Schema.Types.ObjectId, default: [], ref: "Post" }],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
