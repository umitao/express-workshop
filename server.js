const express = require("express");
const formidable = require("express-formidable");
const fs = require("fs");
const app = express();

app.use(express.static("public"));
app.use(formidable());

fs.readFile(__dirname + "/data/posts.json", function (error, file) {
  let parsedFile = JSON.parse(file);
  console.log(parsedFile);
  const postDate = Date.now();
  fs.writeFileSync(
    __dirname + "/data/posts.json",
    `"${postDate}": "Testing"`,
    { flag: "a+" },
    function (error) {
      console.log(error);
    }
  );
});

app.post("/create-post", function (req, res) {
  console.log(req.fields);
  console.log("/create-post");
  res.send(req.fields);
});

app.listen(3000, function () {
  console.log("Server is up and running on 3000.");
});

// const newLogs = `${Date.now()}: new logs`;
// fs.readFile("log.txt", { encoding: "utf8" }, (err, data) => {
//   const newData = data + newLogs + "\n";
//   fs.writeFile("log.txt", newData, "utf8", callback);
// });
