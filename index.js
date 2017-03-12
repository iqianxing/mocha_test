var assert = require('chai').assert;
var request = require("request");

var tests = [
    "http://react.apptravel.cn/"
];

tests.forEach(function (url) {
    it(url, function (done) {
        request.defaults({
                proxy: "http://127.0.0.1:8888",
                headers: {
                    "User-Agent": "request"
                }
            }).get(url)
            .on("response", function (response, body) {
                //console.log(response);
                console.log(body);
                done();
            });
    });
});

describe("request jar test", function () {
    it("jar", function (done) {
        request.defaults({
            jar: true,
            proxy: "http://127.0.0.1:8888",
            headers: {
                "User-Agent": "request"
            }
        }).post({
            url: "http://react.apptravel.cn/api/v1/auth",
            json: { "name": "wu@aicebug.com", "password": "123456" },
        }, function () {
            request.get("http://react.apptravel.cn/")
                .on("response", function (response, body) {
                    //console.log(response);
                    console.log(body);
                    done();
                });
        })
    })
})