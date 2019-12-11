const Sequelize = require('sequelize');
const { Character } = require('./models.js');

// Sample data used for testing and development only
async function createUser(){
	await Character.destroy({where: {} });
	await Character.bulkCreate([
		{
			name: 'Spider-Man',
			type: 'hero',
			abilities: 'Strength, agility, sticking to walls.',
		},
		{
			name: 'Sandman',
			type: 'villain',
			abilities: 'Change molecular state.',
		},
		{
			name: 'Iron Man',
			type: 'hero',
			abilities: 'Super smart.',
		},
		{
			name: 'Captain America',
			type: 'hero',
			abilities: 'Strength, agility.',
		},
		{
			name: 'Black Widow',
			type: 'hero',
			abilities: 'Agility, martial arts.',
		},
		{
			name: 'Task Master',
			type: 'villain',
			abilities: 'Hyperkenisis',
		},
		{
			name: 'Black Panther',
			type: 'hero',
			abilities: 'Strength, agility.',
		},
		{
			name: 'Dr. Doom',
			type: 'villain',
			abilities: 'Sorcerer',
		},
	])
};


async function seed(){
	try{
		await createUser();
	}catch(e){
		console.error(e);
	}
	process.exit();
};

seed();
