const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Low Coverage", function() {

  it("should be down price by 1 when sellIn > 0", function() {
    const coTest = new CarInsurance([new Product("Low Coverage", 1, 10) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Low Coverage");
    expect(products[0].sellIn).equal(0);
    expect(products[0].price).equal(9);
  });

  it("should be down price by 2 when sellIn = 0", function() {
    const coTest = new CarInsurance([new Product("Low Coverage", 0, 10) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Low Coverage");
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(8);
  });

  it("should be down price by 2 when sellIn < 0", function() {
    const coTest = new CarInsurance([new Product("Low Coverage", -1, 10) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Low Coverage");
    expect(products[0].sellIn).equal(-2);
    expect(products[0].price).equal(8);
  });

  it("should price never go negative when sellIn > 0", function() {
    const coTest = new CarInsurance([new Product("Low Coverage", 1, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Low Coverage");
    expect(products[0].sellIn).equal(0);
    expect(products[0].price).equal(0);
  });

  it("should price never go negative when sellIn = 0", function() {
    const coTest = new CarInsurance([new Product("Low Coverage", 0, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Low Coverage");
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(0);
  });

  it("should price never go negative when sellIn < 0", function() {
    const coTest = new CarInsurance([new Product("Low Coverage", -1, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Low Coverage");
    expect(products[0].sellIn).equal(-2);
    expect(products[0].price).equal(0);
  });
});

describe("Full Coverage", function () {

  it("should be up price by 1 when sellIn > 0", function () {
    const coTest = new CarInsurance([new Product("Full Coverage", 1, 10)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(0);
    expect(products[0].price).equal(11);
  });

  it("should be up price by 2 when sellIn = 0", function () {
    const coTest = new CarInsurance([new Product("Full Coverage", 0, 10)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(12);
  });

  it("should be up price by 2 when sellIn < 0", function () {
    const coTest = new CarInsurance([new Product("Full Coverage", -1, 10)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(-2);
    expect(products[0].price).equal(12);
  });

  it("should price never exceed 50 when sellIn > 0", function () {
    const coTest = new CarInsurance([new Product("Full Coverage", 1, 50)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(0);
    expect(products[0].price).equal(50);
  });

  it("should price never exceed 50 when sellIn = 0", function () {
    const coTest = new CarInsurance([new Product("Full Coverage", 0, 50)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(50);
  });

  it("should price never exceed 50 when sellIn < 0", function () {
    const coTest = new CarInsurance([new Product("Full Coverage", -1, 50)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(-2);
    expect(products[0].price).equal(50);
  });
});

describe("Mega Coverage", function () {

  it("should be price = 80 and the same sellIn", function () {
    const coTest = new CarInsurance([new Product("Mega Coverage", 1, 80)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Mega Coverage");
    expect(products[0].sellIn).equal(1);
    expect(products[0].price).equal(80);
  });
});

describe("Special Full Coverage", function () {

  it("should be increase price by 1 when sellIn > 10", function () {
    const coTest = new CarInsurance([new Product("Special Full Coverage", 11, 10)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(10);
    expect(products[0].price).equal(11);
  });

  it("should be increase price by 2 when sellIn = 10", function () {
    const coTest = new CarInsurance([new Product("Special Full Coverage", 10, 10)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(9);
    expect(products[0].price).equal(12);
  });
  
  it("should be increase price by 2 when 5 > sellIn < 10", function () {
    const coTest = new CarInsurance([new Product("Special Full Coverage", 7, 10)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(6);
    expect(products[0].price).equal(12);
  });
  
  it("should be increase price by 3 when sellIn = 5", function () {
    const coTest = new CarInsurance([new Product("Special Full Coverage", 5, 10)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(4);
    expect(products[0].price).equal(13);
  });
  
  it("should be increase price by 3 when 0 > sellIn < 5", function () {
    const coTest = new CarInsurance([new Product("Special Full Coverage", 3, 10)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(2);
    expect(products[0].price).equal(13);
  });
  
  it("should be price = 0 when sellIn = 0", function () {
    const coTest = new CarInsurance([new Product("Special Full Coverage", 0, 10)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(0);
  });

  it("should be price = 0 when sellIn < 0", function () {
    const coTest = new CarInsurance([new Product("Special Full Coverage", -1, 10)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(-2);
    expect(products[0].price).equal(0);
  });

  it("should never increase price when price = 50 and sellIn > 10", function () {
    const coTest = new CarInsurance([new Product("Special Full Coverage", 11, 50)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(10);
    expect(products[0].price).equal(50);
  });

  it("should never increase price when price = 50 and sellIn = 10", function () {
    const coTest = new CarInsurance([new Product("Special Full Coverage", 10, 50)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(9);
    expect(products[0].price).equal(50);
  });

  it("should never increase price when price = 50 and 5 > sellIn < 10", function () {
    const coTest = new CarInsurance([new Product("Special Full Coverage", 7, 50)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(6);
    expect(products[0].price).equal(50);
  });

  it("should never increase price when price = 50 and sellIn = 5", function () {
    const coTest = new CarInsurance([new Product("Special Full Coverage", 5, 50)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(4);
    expect(products[0].price).equal(50);
  });

  it("should never increase price when price = 50 and 0 > sellIn < 5", function () {
    const coTest = new CarInsurance([new Product("Special Full Coverage", 3, 50)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(2);
    expect(products[0].price).equal(50);
  });

});