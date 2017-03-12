var assert = require('chai').assert;
var request = require("request");

var tests = [
    "http://www.qq.COM"
    , "http://mochajs.org/"
    , "https://github.com/mochajs/mocha/wiki"
    , "http://react.apptravel.cn/"
    , "http://react.apptravel.cn/article/20"
    , "https://www.baidu.com/"
    , "http://www.126.com/"
    ,"https://segmentfault.com/a/1190000002748032"
    ,"https://raw.githubusercontent.com/beautify-web/js-beautify/master/jsbeautifyrc"
];

describe('#diff', function () {
    describe('##toLocaleLowerCase()', function () {
        tests.forEach(function (url) {
            it(url, function () {
                assert.equal(url, url.toLocaleLowerCase())
            });
        })
    });

    describe('##equal()', function () {
        tests.forEach(function (url) {
            it(url, function () {
                assert.equal(url, url)
            });
        })
    })
});