const { sequelize } = require('./models.js');
const { seed } = require('./seed.js');

async function resetDb() {
	console.log('resetting');
	try {
		// await sequelize.sync({force: true});
		await sequelize.sync();
		console.log('database sync\'d');
	} catch (e) {
		console.error(e);
	} finally {
		process.exit();
	}
}

const init = async () => {
	await resetDb();
	await seed();
}

init();
