const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Character } = require('./models.js');

const PORT = 8080;
const HOST = '0.0.0.0';


const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());


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
app.listen(PORT, HOST);

console.log(`Server running on ${PORT}:${HOST}`);

