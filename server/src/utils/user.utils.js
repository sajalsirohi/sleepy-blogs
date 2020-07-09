const User = require("../database/models/user.model");

handleError = (err, user, res) => {
  if (err)
    return res.send({
      error: err,
      status: 400,
    });
  res.send(user);
};

function createUser(req, res) {
  const { query } = req;
  const newUser = new User({ ...query });
  newUser.save(handleError(err, user, res));
}

function updateUser(req, res) {
  const { query } = req;
  console.log(query);
  User.findOneAndUpdate(
    {
      _id: query._id,
    },
    {
      $set: query,
    },
    {
      new: true,
      useFindAndModify: false
    },
    (err, user) => {
      handleError(err, user, res);
    }
  );
}

function addPostToUser(req, res) {
  const {
    query: { user_id, post_id, add_as },
  } = req;

  if (add_as === "author") var pushParameter = {author_of_posts: post_id};
  else var pushParameter = { liked_posts: post_id };
  console.log(user_id, post_id);
  User.findOneAndUpdate(
    {
      _id: user_id,
    },
    {
      $push: pushParameter,
    },
    {
      new: true,
    },
    (err, user) => {
      handleError(err, user, res);
    }
  );
}

module.exports = {
  createUser: createUser,
  updateUser: updateUser,
  addPostToUser: addPostToUser,
};
