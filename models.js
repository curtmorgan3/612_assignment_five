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
const sequelize = new Sequelize('postgres://postgres:JJay17!*jr@127.0.0.1:5432/marvel_db', {
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
