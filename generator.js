const ejs = require("ejs");
const fs = require("fs");
const data = require("./projects.json");

ejs.renderFile(
  "index.ejs",
  { projects: data.projects },
  (err, string) => {
    fs.writeFile("index.html", string, (err) => {
      if (err) {
        return console.log("ERROR", err);
      }
      console.log("Complete with ", data.projects.length, " projects");
    });
  }
);
