const path = require('path');
const fs = require('fs');
const { Parser, transforms: { unwind } } = require('json2csv');

fs.readFile(path.join(__dirname, '/','books.jsn'), 'utf-8', (err, content) => {
    if (err) throw new Error(err);
    const data = JSON.parse(content);
    const fields = [];

    for (let key in data[0]) {
        fields.push(key)
    }


    const transforms = [unwind({paths: ['libraryAvailability']})]
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(data);

    fs.writeFile(path.join(__dirname, '/', 'books.csv'), csv, (err) => {
        if (err) throw new Error(err)
    });
});