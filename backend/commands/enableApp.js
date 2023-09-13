const { exec } = require('child_process');

module.exports = (req, res) => {
    const appName = req.query.appName;
    exec(`shell_command_to_enable_app ${appName}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return res.status(500).send('Internal Server Error');
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return res.status(500).send('Internal Server Error');
        }

        res.sendStatus(200);
    });
};
