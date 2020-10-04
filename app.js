const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	try {
		const { dir } = req.query;
		const command = `cd ${dir}; git pull;`;

		exec(command, (error, stdout, stderr) => {
			if (error) {
				res.send(`error: ${error.message}`);
				return;
			}
			if (stderr) {
				res.send(`stderr: ${stderr}`);
				return;
			}
			res.send(`stdout: ${stdout}`);
		});
	} catch (err) {
		res.send(err);
	}
});

app.listen(port, () => {
	console.log(`Webhook Puller listening at http://127.0.0.1:${port}`);
});
