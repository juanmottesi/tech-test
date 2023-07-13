const {
  ConditionIncreasePriceWhenSellInLessOrEqualThan,
  ConditionIncreasePriceWhenSellInGreaterThan,
  ConditionDowncreasePriceWhenSellInLessOrEqualThan,
  ConditionDowncreasePriceWhenSellInGreaterThan,
  ConditionStayEqual,
  ConditionChangePriceWhenSellInLessOrEqualThan,
} = require("./Conditions");

class Evaluator {
  conditions = []

  update(product) {
    const currentCondition = this.conditions.find((condition) => condition.eval(product)) || this.defaultCondition();
    currentCondition.apply(product);
  }

  defaultCondition() {
    throw new Error('Subclass responsability');
  }
}

class EvaluatorFullCoverage extends Evaluator {
  conditions = [
    new ConditionIncreasePriceWhenSellInGreaterThan(1, 0),
    new ConditionIncreasePriceWhenSellInLessOrEqualThan(2, 0),
  ]
}

class EvaluatorMegaCoverage extends Evaluator {
  conditions = [
    new ConditionStayEqual(),
  ]
}

class EvaluatorSpecialFullCoverage extends Evaluator {
  conditions = [
    new ConditionIncreasePriceWhenSellInGreaterThan(1, 10),
    new ConditionChangePriceWhenSellInLessOrEqualThan(0, 0),
    new ConditionIncreasePriceWhenSellInLessOrEqualThan(3, 5),
    new ConditionIncreasePriceWhenSellInLessOrEqualThan(2, 10),
  ]
}

class EvaluatorDefault extends Evaluator {
  conditions = [
    new ConditionDowncreasePriceWhenSellInLessOrEqualThan(2, 0),
    new ConditionDowncreasePriceWhenSellInGreaterThan(1, 0),
  ]
}

module.exports = {
  EvaluatorFullCoverage,
  EvaluatorMegaCoverage,
  EvaluatorSpecialFullCoverage,
  EvaluatorDefault,
};
