const fs = require('fs');
const yaml = require('js-yaml');

module.exports = (req, res) => {
    try {
        let fileContents = fs.readFileSync('./availableApps.yaml', 'utf8');
        let data = yaml.load(fileContents);

        res.json(data);
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
};
