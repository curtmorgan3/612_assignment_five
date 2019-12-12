const Sequelize = require('sequelize');
const DATABASE_NAME = "marvel_db";

// const sequelize = new Sequelize({
// 	database: DATABASE_NAME,
// 	dialect: 'postgres',
// 	operatorsAliases: false,
// 	define: {
// 		underscored: true
// 	},
// });
console.log(process.env.DATABASE_URL);
const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/marvel_db', {
	dialect: 'postgres',
	protocol: 'postgres',
	operatorsAliases: false,
	define: {
		underscored: true
	},
	dialectOptions: {
		ssl: true
	}
});

const Character = sequelize.define('character', {
	name: Sequelize.STRING,
	type: Sequelize.STRING,
	abilities: Sequelize.STRING,
});

module.exports = {
	sequelize,
	Character
}
