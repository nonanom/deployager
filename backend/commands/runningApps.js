const { exec } = require('child_process');

module.exports = (req, res) => {
    exec("shell_command_to_get_running_apps", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return res.status(500).send('Internal Server Error');
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return res.status(500).send('Internal Server Error');
        }

        res.json({ runningApps: JSON.parse(stdout) });
    });
};
