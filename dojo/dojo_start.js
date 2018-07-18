var fetch = require('node-fetch');

var config = require('./../config/config');

let url = `http://${config.log.host}:${config.log.port}/eink?username=${config.username}`;
console.log(url);
fetch(url, {timeout: 10000});

console.log(`wellcome ${config.username}`);