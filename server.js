const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const pg = require('pg');
const { Character } = require('./models.js');

pg.connect('postgres://curtmorgan:JJay17!*jr@localhost:5432/marvel_db');
const PORT = 3000;

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', async (req, res) => {
	res.json({msg: 'Success'});
})

app.get('/characters', async (req, res) => {
	try {
		const characters = await Character.findAll();
		res.json(characters)
	} catch (e) {
		res.json({msg: e})
	}
});

app.get('/characters/:id', async (req, res) => {
	try {
		const character = await Character.findByPk(req.params.id);
		res.json(character);
	} catch (e) {
		res.json({msg: e})
	}
});

app.get('/characters/type/:type', async (req, res) => {
	try {
		const characters = await Character.findAll({where: {type: req.params.type}});
		res.json(characters);
	} catch (e) {
		res.json({msg: e})
	}
});

app.get('/characters/heroes/:index', async (req, res) => {
	try {
		const characters = await Character.findAll({where: {type: 'hero'}});
		const character = characters[req.params.index - 1];
		res.json(character);
	} catch (e) {
		res.json({msg: e})
	}
});

app.get('/characters/villains/:index', async (req, res) => {
	try {
		const characters = await Character.findAll({where: {type: 'villain'}});
		const character = characters[req.params.index - 1];
		res.json(character);
	} catch (e) {
		res.json({msg: e})
	}
});

app.listen(PORT, () => {
	console.log(`Server running on ${PORT}`);
});


