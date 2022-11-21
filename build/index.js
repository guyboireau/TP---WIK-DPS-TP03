"use strict";
const express = require('express');
const dotenv = require('dotenv');
const app = express();
const os = require("os");
dotenv.config();
const port = process.env.PING_LISTEN_PORT;
app.use(express.json());
app.get('/ping', (req, res) => {
    try {
        res.json(req.headers);
        console.log("Hostname: " + os.hostname());
    }
    catch (err) {
        console.log(err);
        res.status(500).send();
    }
});
app.get('*', (req, res) => {
    try {
        res.status(404).send();
    }
    catch (err) {
        console.log(err);
        res.status(500).send();
    }
});
app.listen(port, () => {
    console.log(`The application is listening on port ${port}`);
});
