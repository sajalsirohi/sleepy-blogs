require("dotenv").config();
const Post = require("../../database/models/post.model");
require("../../database/connection");
var cats = new Set();
var post = [];
var tags_ = new Set();

Post.find({ categories: { $regex: ".*" + "a" + ".*" } })
  .limit(6)
  .select("categories -_id")
  .then((posts) => {
    posts.map(({ categories }) => {
      tempCat = categories.filter(
        (item) => item.toLowerCase().indexOf("a") > -1
      );
      tempCat.forEach((ctg) => cats.add(ctg));
    });
  });

Post.find({ tags: { $regex: ".*" + "a" + ".*" } })
  .limit(6)
  .select("tags -_id")
  .then((posts) => {
    posts.map(({ tags }) => {
      tempTag = tags.filter((item) => item.toLowerCase().indexOf("a") > -1);
      tempTag.forEach((tag) => tags_.add(tag));
    });
  });

Post.find({ title: { $regex: ".*" + "Nikola" + ".*" } })
  .limit(6)
  .select("title")
  .then((posts) => {
    post = posts;
  });
