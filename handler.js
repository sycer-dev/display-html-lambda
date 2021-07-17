const serverless = require('serverless-http');
const express = require('express');
const fetch = require('node-fetch');

const app = express();

const HTMLREGEX = /https?:\/\/cdn.discordapp.com\/attachments\/\d{17,19}\/\d{17,19}\/.*?.(?:html)/;

app.get('/', async (req, res) => {
	try {
		const { uri } = req.query;
		const match = uri ? HTMLREGEX.test(`${uri}`) : null;
		if (!uri || !match)
			return res.code(409).send('Invalid HTML file url provided.');

		const get = await fetch(`${uri}`);
		const text = await get.text();
		res.set('Content-Type', 'text/html');
		return res.send(Buffer.from(text));
	} catch {
		return res.status(500).send('Umm... something bad happened 🦗');
	}
});

module.exports.handler = serverless(app);