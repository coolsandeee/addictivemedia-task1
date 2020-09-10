const fs = require('fs');
const db = require("../models");
const Candidate = db.candidates;
const Op = db.Sequelize.op;

// Create and Save a new Candidate
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Enter Your Name."
    });
    return;
  }

  const candidate = {
  	name: req.body.name,
  	// candidate_id: req.body.candidate_id
  };

  Candidate.create(candidate)
  		.then( data => {res.send(data);})
  		.catch(err => { 
  			res.status(500).send({
  				message: err.message +  `. Error occurred while creating a candidate`
  			});
  		});
};

// Upload a Multipart-File then saving it to MySQL database
exports.upload1 = (req, res) => {  

  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Enter Your Name."
    });
    return;
  }
  if (!req.file) {
    res.status(400).send({
      message: "Upload a resume."
    });
    return;
  }
  if (!req.body.dob) {
    res.status(400).send({
      message: "Enter Your Date Of Birth."
    });
    return;
  }
  if (!req.body.country) {
    res.status(400).send({
      message: "Enter Your Country."
    });
    return;
  }


  const candidate = {
  	name: req.body.name,
  	dob: req.body.dob,
  	country_code: req.body.country,
  	resume_name: req.file.originalname,
  	resume_contents: fs.readFileSync('./uploads/' + req.file.filename),
  	active: true,
  	created_by: req.body.name,
  	updated_by: req.body.name,
  	updated_on: new Date()
  };

  Candidate.create(candidate)
  		.then( data => {res.send(data);})
  		.catch(err => { 
  			res.status(500).send({
  				message: err.message +  `. Error occurred while creating a candidate with file upload.`
  			});
  		});

};

// Retrieve all Candidates from the database.
exports.findAll = (req, res) => {
	console.log("Retrieving all the candidate details.");

/*	Candidate.findAll()
			.then(candidate_details => res.json(candidate_details));  
*/
/*	Candidate.findAll({attributes: ['candidate_id', 'name', 'dob', 'country_code', 'resume_name']})
			.then(candidate_details => res.json(candidate_details));  
*/
	Candidate.findAll({
		attributes: ['candidate_id', 'name', 'dob', 'country_code', 'resume_name'],
		where: {active: true}
		})
			.then(candidate_details => res.json(candidate_details));  

};

// Find a Candidate with an id
exports.findOne = (req, res) => {
	
	if (!req.body.candidate_id) {
    	res.status(400).send({
      	message: "Select a candidate."
    	});
    	return;
  	}


  const candidate = {
  	candidate_id: req.body.candidate_id
  };

  
  Candidate.findByPk(candidate.candidate_id)
  		.then(data => { 
  			if(data == null) {res.send({message:"Couldn't find the requested candidate."});} 
  			else {res.send(data);}
  		})
  		.catch(err => {res.status(500).send({message:"Error occurred while retrieving candidate details"});})
  ;


};

// Update a Candidate by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Candidate with the specified id in the request
exports.delete = (req, res) => {
  
  if (!req.body.candidate_id) {
    res.status(400).send({
      message: "Select a candidate to delete."
    });
    return;
  }


  const candidate = {
  	candidate_id: req.body.candidate_id//,
  	// active: false,
  	//updated_by: req.body.name
  };

  Candidate.destroy(
  	{where: { candidate_id: candidate.candidate_id }}
  	)
  		.then( data => {
  			if (data == 1) {res.send({message: "Candidate was deleted successfully."});}
  			else {res.send({message: "Couldn't delete the candidate."});}
  		})
  		.catch(err => {
  			res.status(500).send({message: err.message +  `. Error occurred while deleting the candidate with id  ${candidate_id}`});
  		});	

};

// Delete all Candidates from the database.
exports.deleteAll = (req, res) => {
  
};

