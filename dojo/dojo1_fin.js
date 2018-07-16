var FluentLogHelper = require('fluent-log-helper');

var config = require('./../config/config');

var logConfig = config.log;
var fluentLogHelper = new FluentLogHelper(logConfig);

console.log("config.username ==>", config.username);
fluentLogHelper.log({
    task: "完成 Dojo 1: TDD: 測試驅動開發",
    username: config.username
});