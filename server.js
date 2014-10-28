var express = require('express');
var app = express();

app.engine("jade", require("jade").__express);

app.use('/public', express.static(__dirname + '/public'));

app.get("/partial/character", function(req,res) {
  res.render("playerPartial.jade", req.query.character_list[0])
});
app.get("/test", function (req,res) {
  res.render("test.jade");
})
app.get("/", function(req, res){
  res.render("index.jade");
});

var server = app.listen(process.env.PORT, function() {
    console.log("Server is now listening on port %d", process.env.PORT);
});