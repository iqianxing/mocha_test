var assert = require('chai').assert;
var request = require("request");

var tests = [
    "http://www.qq.com"
    , "http://mochajs.org/"
    , "https://github.com/mochajs/mocha/wiki"
    , "http://react.apptravel.cn/"
    , "http://react.apptravel.cn/article/20"
    , "https://www.baidu.com/"
    , "http://www.126.com/"
    ,"https://segmentfault.com/a/1190000002748032"
    ,"https://raw.githubusercontent.com/beautify-web/js-beautify/master/jsbeautifyrc"
];

describe('#request ajax', function () {
    tests.forEach(function (url) {
        it(url, function (done) {
            request({
                method: "get",
                url: url
            }, function (err, response, data) {
                assert.equal(response.statusCode, 200);
                done();
            });
        });
    })
});