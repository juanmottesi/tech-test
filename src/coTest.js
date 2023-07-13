const {
  EvaluatorFullCoverage,
  EvaluatorMegaCoverage,
  EvaluatorSpecialFullCoverage,
  EvaluatorDefault,
  EvaluatorSuperSale,
} = require("./Evaluators");

class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
    this.evaluators = {
      'Full Coverage': new EvaluatorFullCoverage(),
      'Mega Coverage': new EvaluatorMegaCoverage(),
      'Special Full Coverage': new EvaluatorSpecialFullCoverage(),
      'Super Sale': new EvaluatorSuperSale(),
    };
    this.evaluatorDefault = new EvaluatorDefault();
  }

  updatePrice() {
    this.products.forEach((product) => {
      const currentEvaluator = this.evaluators[product.name] || this.evaluatorDefault;
      currentEvaluator.update(product);
    });
    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
}
