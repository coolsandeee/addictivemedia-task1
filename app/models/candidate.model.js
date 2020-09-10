module.exports = (sequelize, Sequelize) => {
	const Candidate = sequelize.define("candidate_details", {
		candidate_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		}, 
		name: {
			type: Sequelize.STRING
		},
		dob: {
			type: Sequelize.DATEONLY
		},
		country_code: {
			type: Sequelize.STRING
		}, 
		resume_name: {
			type: Sequelize.STRING
		}, 
		resume_contents: {
			type: Sequelize.BLOB
		}, 
		active: {
			type: Sequelize.BOOLEAN
		},
		created_by: {
			type: Sequelize.STRING
		},
		created_on: {
			type: Sequelize.DATE
		},
		updated_by: {
			type: Sequelize.STRING
		},
		updated_on: {
			type: Sequelize.DATE
		}
	}, 	{
		timestamps: false
	});

	return Candidate;
};