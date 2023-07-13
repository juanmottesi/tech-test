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
