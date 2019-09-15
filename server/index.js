const { CLIENT_DIRECTORY_PATH, PORT, SERVER_START } = require(__dirname + '/constants');
const express = require('express');
const { Logger } = require('mosaic-logger');
const server = express();

server.use(express.static(__dirname + CLIENT_DIRECTORY_PATH));

server.listen(PORT, Logger.info.bind(Logger, SERVER_START));