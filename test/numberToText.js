
var numberToText = require('../index');
require('should');
describe("number conversion",function() {
	
	it("should convert 123456 to One Hundred Twenty Three Thousand, Four Hundred Fifty Six",function(done){
		numberToText.convertToText("123456").should.equal("One Hundred Twenty Three Thousand, Four Hundred Fifty Six");
		numberToText.convertToText(123456).should.equal("One Hundred Twenty Three Thousand, Four Hundred Fifty Six");
        numberToText.convertToText(123456,{case:"lowerCase"}).should.equal("one hundred twenty three thousand, four hundred fifty six");
        numberToText.convertToText(123456,{case:"upperCase"}).should.equal("ONE HUNDRED TWENTY THREE THOUSAND, FOUR HUNDRED FIFTY SIX");
        numberToText.convertToText(123456,{separator : '', case:"upperCase"}).should.equal("ONE HUNDRED TWENTY THREE THOUSAND FOUR HUNDRED FIFTY SIX");
		done();
	});
	
	it("should convert 1234567 to One Million, Two Hundred Thirty Four Thousand, Five Hundred Sixty Seven",function(done){
		numberToText.convertToText("1234567").should.equal("One Million, Two Hundred Thirty Four Thousand, Five Hundred Sixty Seven");
		numberToText.convertToText(1234567).should.equal("One Million, Two Hundred Thirty Four Thousand, Five Hundred Sixty Seven");
		done();
	});
	
	it("should convert 0 to zero",function(done){
		numberToText.convertToText("0").should.equal("Zero");
		numberToText.convertToText(0).should.equal("Zero");
		done();
	});
	
	it("should convert 23 to Twenty Three",function(done){
		numberToText.convertToText("23").should.equal("Twenty Three");
		numberToText.convertToText(23).should.equal("Twenty Three");
		done();
	});
	
	it("should convert 1004 to One Thousand, Four",function(done){
		numberToText.convertToText("1004").should.equal("One Thousand, Four");
		numberToText.convertToText(1004).should.equal("One Thousand, Four");
		done();
	});
	
	it("should convert 14 to Fourteen",function(done){
		numberToText.convertToText("14").should.equal("Fourteen");
		numberToText.convertToText(14).should.equal("Fourteen");
		done();
	});
	
	it("should convert 1000000 to One Million",function(done){
		numberToText.convertToText("1000000").should.equal("One Million");
		numberToText.convertToText(1000000).should.equal("One Million");
		done();
	});
	
	it("should convert 1000000000 to One Billion",function(done){
		numberToText.convertToText("1000000000").should.equal("One Billion");
		numberToText.convertToText(1000000000).should.equal("One Billion");
		done();
	});
	
	it("should convert 1000000000000 to One Trillion",function(done){
		numberToText.convertToText("1000000000000").should.equal("One Trillion");
		numberToText.convertToText(1000000000000).should.equal("One Trillion");
		done();
	});
    
    it("should convert 1 to One",function(done){
		numberToText.convertToText("1").should.equal("One");
		numberToText.convertToText(1).should.equal("One");
		done();
	});
    
    it("should convert 50005 to Fifty Thousand, Five",function(done){
		numberToText.convertToText("50005").should.equal("Fifty Thousand, Five");
		numberToText.convertToText(50005).should.equal("Fifty Thousand, Five");
		done();
	});
	
	
});