var path = require("path");

module.exports = function(app) {
	// if user enters survey in URL or presses survey button, serves the survey HTML file
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../survey2.html"));
	});

	// fallback use route for homepage
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "/../pickme.html"));
	});
};