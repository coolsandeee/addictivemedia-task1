module.exports = {
	HOST: "sql12.freemysqlhosting.net", 
	USER: "sql12364408", 
	PASSWORD: "6rNc8LA3aX",
	DB: "sql12364408",
	PORT: 3306,
	dialect: "mysql",
	pool:{
		max:5,
		min:0,
		acquire: 30000,
		idle: 10000
	}
};
