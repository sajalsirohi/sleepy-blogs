require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const getLandingPage = require("./utils/getLandingPage");
const { createComment } = require("./utils/comment.utils");
const { registerUser, validateUser } = require("./utils/userLogin.utils");
const { createUser, updateUser, addPostToUser } = require("./utils/user.utils");
const { createPost, getPostPageDetails, likePost, getAllPosts } = require("./utils/post.utils");
const { searchBarResults } = require("./utils/search.utils");
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

// Database related imports
require("./database/connection");

app.route("/").get((req, res) => res.send("Hello from the server uWu"));

app.route("/landingPage").get(getLandingPage);

app.route("/user").post(createUser).put(updateUser).patch(addPostToUser);

app.route("/register").post(registerUser);

app.route("/login").post(validateUser);

app.route("/posts").post(createPost).get(getAllPosts);

app.route("/posts/:postId").get(getPostPageDetails);

app.route("/posts/:postId/like").post(likePost)

app.route("/comment").post(createComment);

app.route("/search").post(searchBarResults);

app.listen(PORT, () => console.log(`App is running on PORT: ${PORT}`));
