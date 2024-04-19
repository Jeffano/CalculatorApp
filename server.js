const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
// Serve static files from the same directory
app.use(express.static(__dirname));

let keystrokes = []; // Array to store keystrokes

app.post('/log', (req, res) => {
    const { timestamp, button, type } = req.body;

    if (!timestamp || !button || !type) {
        res.status(400).send('Invalid request');
        return;
    }

    // Determine the correct CSV file based on the calculator type
    let filename;
    switch (type) {
        case 'infix':
            filename = 'infix.csv';
            break;
        case 'rpn':
            filename = 'rpn.csv';
            break;
        case 'order':
            filename = 'order.csv';
            break;
        default:
            res.status(400).send('Invalid calculator type');
            return;
    }

    const filepath = path.join(__dirname, filename);
    const logEntry = `${timestamp},${button}\n`;

    // Append the log entry to the appropriate CSV file
    fs.appendFile(filepath, logEntry, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error writing to file');
            return;
        }

        console.log('Keystroke logged to:', filename);
        res.sendStatus(200);
    });
});

app.post('/clear', (req, res) => {
    const { type } = req.body;

    let filename;
    switch (type) {
        case 'infix':
            filename = 'infix.csv';
            break;
        case 'rpn':
            filename = 'rpn.csv';
            break;
        case 'order':
            filename = 'order.csv';
            break;
        default:
            res.status(400).send('Invalid calculator type');
            return;
    }

    const filepath = path.join(__dirname, filename);

    // Clear the file by writing an empty string to it
    fs.writeFile(filepath, '', (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error clearing the file');
            return;
        }

        console.log('CSV file cleared:', filename);
        res.sendStatus(200);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
