var path = require("path")

var html = {
    home: function (req, res) {
        res.sendFile(path.join(__dirname, "../home.html"));
    },
    survey: function (req, res) {
        res.sendFile(path.join(__dirname, "../survey.html"));
    }
}

module.exports = html