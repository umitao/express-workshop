const express = require("express");
const formidable = require("express-formidable");
const fs = require("fs");
const app = express();

app.use(express.static("public"));
app.use(formidable());

fs.readFile(__dirname + "/data/posts.json", function (error, file) {
  if (error) throw error;
  let parsedFile = JSON.parse(file);
  const postDate = Date.now().toString();
});

app.post("/create-post", function (req, res) {
  let postBody = req.fields.blogpost;
  res.send(postBody);
});

app.listen(3000, function () {
  console.log("Server is up and running on 3000.");
});

// const newLogs = `${Date.now()}: new logs`;
// fs.readFile("log.txt", { encoding: "utf8" }, (err, data) => {
//   const newData = data + newLogs + "\n";
//   fs.writeFile("log.txt", newData, "utf8", callback);
// });
