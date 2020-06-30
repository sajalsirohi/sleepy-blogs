const Post = require("../database/models/post.model");

async function searchBarResults(req, res) {
  var {
    query: { searchFor, searchBy },
  } = req;
  if (!searchFor) return console.log("No result");
  searchFor = searchFor.toLowerCase();
  console.log(searchFor, searchBy);
  const findCategories = async (searchFor) =>
    await Post.find({ categories: { $regex: `.*${searchFor}.*` } })
      .limit(6)
      .select("categories -_id")
      .then(async (posts) => {
        var cats = new Set();
        await posts.map(({ categories }) => {
          console.log(categories);
          tempCat = categories.filter(
            (item) => item.toLowerCase().indexOf(searchFor) > -1
          );
          tempCat.forEach((ctg) => cats.add(ctg));
        });
        return Array.from(cats);
      });

  const findTags = async (searchFor) =>
    await Post.find({ tags: { $regex: ".*" + searchFor + ".*" } })
      .limit(6)
      .select("tags -_id")
      .then((posts) => {
        var tags_ = new Set();
        posts.map(({ tags }) => {
          tempTag = tags.filter(
            (item) => item.toLowerCase().indexOf(searchFor) > -1
          );
          tempTag.forEach((tag) => tags_.add(tag));
        });
        return Array.from(tags_);
      });

  const findTitles = async (searchFor) =>
    await Post.find({ title: { $regex: ".*" + searchFor + ".*" } })
      .limit(6)
      .select("title")
      .then((posts) => {
        return posts;
      });

  if (searchBy.toLowerCase() === "search by")
    return res.send({
      title: await findTitles(searchFor),
      tags: await findTags(searchFor),
      categories: await findCategories(searchFor),
    });
  else if (searchBy.toLowerCase() === "title")
    return res.send({
      title: await findTitles(searchFor),
    });
  else if (searchBy.toLowerCase() === "tags")
    res.send({
      tags: await findTags(searchFor),
    });
  else if (searchBy.toLowerCase() === "categories")
    return res.send({
      categories: await findCategories(searchFor),
    });
  else
    return res.send({
      status: error,
      reason: "Wrong option",
    });
}

module.exports = {
  searchBarResults: searchBarResults,
};
