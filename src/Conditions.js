const MAX_PRICE = 50
const MIN_PRICE = 0

class Condition {
  eval(product) {
    throw new Error('Subclass responsability');
  }

  apply(product) {
    throw new Error('Subclass responsability');
  }

  downcreaseSellIn(product) {
    product.sellIn -= 1;
  }
}

class ConditionIncreasePriceWhenSellInLessOrEqualThan extends Condition {
  constructor(amount, lessThan) {
    super();
    this.amount = amount;
    this.lessThan = lessThan;
  }

  eval(product) {
    return product.sellIn <= this.lessThan;
  }

  apply(product) {
    product.price += this.amount;
    if (product.price > MAX_PRICE) {
      product.price = MAX_PRICE;
    }
    this.downcreaseSellIn(product);
  }
}

class ConditionIncreasePriceWhenSellInGreaterThan extends Condition {
  constructor(amount, greaterThan) {
    super();
    this.amount = amount;
    this.greaterThan = greaterThan;
  }

  eval(product) {
    return product.sellIn > this.greaterThan;
  }

  apply(product) {
    product.price += this.amount;
    if (product.price > MAX_PRICE) {
      product.price = MAX_PRICE;
    }
    this.downcreaseSellIn(product);
  }
}

class ConditionDowncreasePriceWhenSellInLessOrEqualThan extends Condition {
  constructor(amount, lessThan) {
    super();
    this.amount = amount;
    this.lessThan = lessThan;
  }

  eval(product) {
    return product.sellIn <= this.lessThan;
  }

  apply(product) {
    product.price -= this.amount;
    if (product.price < MIN_PRICE) {
      product.price = MIN_PRICE;
    }
    this.downcreaseSellIn(product);
  }
}

class ConditionDowncreasePriceWhenSellInGreaterThan extends Condition {
  constructor(amount, greaterThan) {
    super();
    this.amount = amount;
    this.greaterThan = greaterThan;
  }

  eval(product) {
    return product.sellIn > this.greaterThan;
  }

  apply(product) {
    product.price -= this.amount;
    if (product.price < MIN_PRICE) {
      product.price = MIN_PRICE;
    }
    this.downcreaseSellIn(product);
  }
}

class ConditionStayEqual extends Condition {
  constructor() {
    super();
  }

  eval() {
    return true;
  }

  apply() {}
}

class ConditionChangePriceWhenSellInLessOrEqualThan extends Condition {
  constructor(amount, lessThan) {
    super();
    this.amount = amount;
    this.lessThan = lessThan;
  }

  eval(product) {
    return product.sellIn <= this.lessThan;
  }

  apply(product) {
    product.price = this.amount;
    this.downcreaseSellIn(product);
  }
}

module.exports = {
  ConditionIncreasePriceWhenSellInLessOrEqualThan,
  ConditionIncreasePriceWhenSellInGreaterThan,
  ConditionDowncreasePriceWhenSellInLessOrEqualThan,
  ConditionDowncreasePriceWhenSellInGreaterThan,
  ConditionStayEqual,
  ConditionChangePriceWhenSellInLessOrEqualThan,
};
