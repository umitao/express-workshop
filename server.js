const express = require("express");
const formidable = require("express-formidable");
const fs = require("fs");
const { parse } = require("path");
const app = express();

app.use(express.static("public"));
app.use(formidable());

// fs.readFile(__dirname + "/data/posts.json", function (error, file) {
//   if (error) throw error;
//   let parsedFile = JSON.parse(file);
//   console.log(parsedFile);
//   const postDate = Date.now().toString();
//   console.log(postDate);
// });

app.post("/create-post", function (req, res) {
  let postBody = req.fields;
  fs.readFile(__dirname + "/data/posts.json", function (error, file) {
    if (error) throw error;
    let parsedFile = JSON.parse(file);
    const postDate = Date.now().toString();
    parsedFile[postDate] = postBody.blogpost;
    console.log(parsedFile);
    fs.writeFile(
      __dirname + "/data/posts.json",
      JSON.stringify(parsedFile, null, 2) + "\n",
      (err) => {
        if (err) throw err;
        console.log("Data written to file");
      }
    );
  });
  res.send(postBody);
});

app.listen(3000, function () {
  console.log("Server is up and running on 3000.");
});

// fs.readFile("myjsonfile.json", "utf8", function readFileCallback(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     obj = JSON.parse(data); //now it an object
//     obj.table.push({ id: 2, square: 3 }); //add some data
//     json = JSON.stringify(obj); //convert it back to json
//     fs.writeFile("myjsonfile.json", json, "utf8", callback); // write it back
//   }
// });
