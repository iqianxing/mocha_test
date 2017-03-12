var assert = require('chai').assert;
var $ = require("najax");
$.ajax=$;

var tests = [
    "http://www.qq.com"
    , "http://mochajs.org/"
    , "http://github.com/mochajs/mocha/wiki"
    , "http://react.apptravel.cn/"
    , "http://react.apptravel.cn/article/20"
];
describe('#ajax', function () {
    tests.forEach(function (url) {
        it(url, function (done) {
            $.ajax({
                method: "get",
                url: url
            }, function (data, status) {
                assert.equal(status, "success");
                done();
            });
        });
    })
});