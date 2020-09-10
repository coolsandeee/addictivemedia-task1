const express = require("express");
const bodyParser = require("body-parser");

var multer = require('multer');
var upload = multer();
const cors = require("cors");
const DIR = './uploads';
var type = upload.single('file');



const db = require("./app/models");
// db.sequelize.sync();
/*db.sequelize.sync({ force: false }).then(() => {
  console.log("not dropping!!!");
});
*/
const app = express();

var corsOptions = {
	origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// for parsing application/json
app.use(bodyParser.json());

// for parsing multipart/form-data
// app.use(upload.array()); 
app.use(express.static('public'));

app.get("/", (req, res) => {
	res.json({message: "Hello World!"});
});

let storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, DIR);
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
 
let uploadStorage = multer({storage: storage});

require("./app/routes/candidate.routes.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});

