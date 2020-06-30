const Post = require("../database/models/post.model");
const User = require("../database/models/user.model");
var categories = new Set();
var tags = new Set();

function getLandingPageDetails(req, res) {
  Post.find()
    .sort("-created_at")
    .limit(6)
    .then((posts) => {
      const updatedPosts = posts.map((post) => {
        return User.find({ _id: post.author_user_id })
          .select("display_name username profile_image_url -_id")
          .then((user) => {
            const { _doc } = { ...user[0] };
            return { post, ..._doc };
          });
      });
      Promise.all(updatedPosts).then((values) => {
        values.map((post) => {
          post.post.categories.map((cats) => {
            categories.add(cats);
          });
          post.post.tags.map((tag) => tags.add(tag));
        });
        console.log(categories, tags)
        res.send({
          post: values,
          categories: Array.from(categories),
          tags: Array.from(tags),
        });
      });
    });
}

module.exports = getLandingPageDetails;
