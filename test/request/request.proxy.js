var assert = require('chai').assert;
var request = require("request");

var options = {
    proxy: "http://127.0.0.1:8888;https://127.0.0.1:8888",
    headers: {
        "User-Agent": "request"
    }
};
var jar = request.jar();
var urls = [
    "http://mapi.m.jd.com/config/display.action?_format_=json",
    "http://m.jd.com/",
];

urls.forEach(function (url, index) {
    request({
        url: url,
        jar: jar,
        proxy: options.proxy,
        headers: options.headers,
    }, function (response) {
        console.log(response)
        var cookie_string = jar.getCookieString(url);
        var cookies = jar.getCookies(url);
        console.log(cookie_string);
        console.log(cookies);
        request({
            url: url,
            jar: jar,
            proxy: options.proxy,
            headers: options.headers,
        });
    });
});