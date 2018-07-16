var FluentLogHelper = require('fluent-log-helper');

var config = require('./../config/config');

var logConfig = config.log;
var fluentLogHelper = new FluentLogHelper(logConfig);

console.log("config.username ==>", config.username);
fluentLogHelper.log({
    task: "Dojo 3: React Native 開發完成",
    username: config.username
});