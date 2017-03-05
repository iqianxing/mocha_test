// mocha支持任何可以抛出一个错误的断言模块。例如：should.js、better-assert、expect.js、unexpected、chai等。
// 这些断言库各有各的特点，大家可以了解一下它们的特点，根据使用场景来选择断言库。

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      [1, 2, 3].indexOf(5).should.equal(-1);
      [1, 2, 3].indexOf(0).should.equal(-1);
    });
  });
});