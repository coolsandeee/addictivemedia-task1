var multer = require('multer');
var upload = multer({ dest: './uploads/'});
var type = upload.single('resume');

module.exports = app => {
	const candidates = require("../controller/candidate.controller.js");
	var router = require("express").Router();

	// Create a new Candidate
  	// router.post("/", candidates.create);

	// Create a new Candidate
  	// router.post("/api/", candidates.create);

  	///////////////////// Working endpoints from here ////////////////////

  	// create a candidate with a resume attached
	app.post('/api/candidate', type, candidates.upload1);

  	// delete a candidate by their candidate id 
	app.delete('/api/candidate', type, candidates.delete);
	// router.delete("/api/candidate", candidates.delete);

  	// list all active candidates 
	app.get('/api/candidates', candidates.findAll);

  	// find a candidate by their candidate id 
	app.get('/api/candidate', type, candidates.findOne);

  	///////////////////// Working endpoints until here ////////////////////


};