var assert = require('chai').assert;
var $ = require("najax");
$.ajax=$;

var tests = [
    "http://www.qq.com"
    , "http://react.apptravel.cn/"
    , "http://react.apptravel.cn/article/20"
    , "https://www.baidu.com/"
    , "http://www.126.com/"
    ,"https://segmentfault.com/a/1190000002748032"
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