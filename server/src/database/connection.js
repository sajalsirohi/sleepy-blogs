const mongoose = require("mongoose");
const connectionString = process.env.connectionString;

mongoose.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, link) => {
    if (err) return console.log(`Connecting to DB failed ...\n${err} occured`);
    console.log(`DB is connected :D`);
  }
);
