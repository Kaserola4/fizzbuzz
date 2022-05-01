const fs = require('fs')

class Reader{
    static readJsonFile(path) {
        const rawdata = fs.readFileSync(path);
        const json = JSON.parse(rawdata);  
        return json
    }
}

module.exports = Reader