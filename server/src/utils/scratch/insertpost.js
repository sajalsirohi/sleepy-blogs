require("dotenv").config();
const Post = require("../../database/models/post.model");
require("../../database/connection");
var post1 = new Post({
  title: "Mowgli is the story here",
  author_user_name: "@mowgli",
  display_name: "Wiki Mars",
  categories: ["Wikipedia", "Jungle Book"],
  profile_image_url:
    "https://i.pinimg.com/originals/1a/69/9a/1a699af5ba1c67fd07711a66bbe733eb.png",
  content: `Mowgli /ˈmaʊɡli/ is a fictional character and the protagonist of Rudyard Kipling's The Jungle Book stories. He is a naked feral child from the Pench area in Seoni, India, who originally appeared in Kipling's short story "In the Rukh" (collected in Many Inventions, 1893) and then went on to become the most prominent and arguably the most memorable character in the collections The Jungle Book and The Second Jungle Book (1894–1895), which also featured stories about other characters.[1]`,
});

post1.save((err, post) => {
  if (err) return console.error(err);
  console.log("save to collection", post._id);
});
