CREATE TABLE `candidate_details` (
 `candidate_id` int(11) NOT NULL AUTO_INCREMENT,
 `name` varchar(100) NOT NULL,
 `dob` date NOT NULL,
 `country_code` varchar(2) NOT NULL,
 `resume_contents` blob NOT NULL,
 `resume_name` varchar(100) NOT NULL,
 `active` tinyint(1) NOT NULL,
 `created_by` varchar(100) NOT NULL,
 `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_by` varchar(100) NOT NULL,
 `updated_on` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
 PRIMARY KEY (`candidate_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1
