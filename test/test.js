var assert = require("chai").assert;
var luhnCheck = require("../luhnCheck");
var test1 = luhnCheck.validate('79927398713');
    var test2 = luhnCheck.validate('49927398716');
    var test3 = luhnCheck.validate('79927398714');
    var test4 = luhnCheck.validate('49927398711');
    var test5 = luhnCheck.validate('49927398712');



describe("Checking if the number is valid", function(){
  describe("should show the true or false for numbers inserted", function(){
    it('should return true', function() {
      assert.isTrue(test1);
    })
    it('should return true', function() {
      assert.isTrue(test2);
    })
    it('should return false', function() {
      assert.isFalse(test3);
    })
    it('should return false', function() {
      assert.isFalse(test4);
    })
    it('should return false', function() {
      assert.isFalse(test5);
    })



  }
  )
})

