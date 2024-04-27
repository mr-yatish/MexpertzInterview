const { writeToPath } = require('@fast-csv/format');
const fs = require('fs');

async function Convert(data) {
    console.log("entered");
    const filePath = './Csv/data.csv';

    // Write new CSV data to the file
    try {
        console.log('writing file');
        await writeToPath(filePath, data);
        console.log('CSV file saved successfully.');
    } catch (err) {
        console.error('Error writing CSV file:', err);
    }
}

module.exports = { Convert };
