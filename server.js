require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const PORT = process.env.PORT;

// nodemailer credentials for account to receive emails
// const GMAIL_USER = process.env.GMAIL_USER;
// const GMAIL_PASS = process.env.GMAIL_PASS;

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());

// nodemailer

let transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS
  }
});

app.post('/contact-us', async (req, res) => {
	try {
		mailOpts = {
		  from: req.body.name + ' &lt;' + req.body.email + '&gt;',
		  to: GMAIL_USER,
		  subject: 'EMAIL SUBJECT LINE HERE',
		  text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
		};
		transporter.sendMail(mailOpts, (error, response) => {
			if(error){
				res.send('Error');
			}else {
				res.send('Success');
			}
		});
	} catch (e) {
		res.json({Error: `${e.msg}`})
	}
})

app.get('/', (req, res) => {
	res.json({msg: "Index Page"});
});

app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));
