var FluentLogHelper = require('fluent-log-helper');

var config = require('./../config/config');

var logConfig = config.log;
var fluentLogHelper = new FluentLogHelper(logConfig);

console.log("config.username ==>", config.username);
fluentLogHelper.log({
    task: "Dojo 1: TDD",
    username: config.username
});