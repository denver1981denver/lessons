'use strict';

const money = +prompt('"Ваш месячный доход?"', '10000'),
  // cпрашиваем у пользователя месячный доход
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 
    'квартплата, еда'),
  // просим пользователя перечислить возможные расходы за рассчитываемый период  
  deposit = confirm('"Есть ли у вас депозит в банке?"'),
  // спрашиваем у пользователя про наличие депозита в банке
  expenses1 = prompt('"Введите обязательную статью расходов"', '"квартплата"'),
  amount1 = +prompt('"Во сколько это обойдётся?"', '3000'),
  expenses2 = prompt('"Введите обязательную статью расходов?"','"расходы на еду"'),
  amount2 = +prompt('"Во сколько это обойдётся?"', '6000'),
  // спрашиваем у пользователя по 2 раза обязательную статью расходов и их стоимость,
  // сохраням каждые данные в двух разных переменных
  
  income = '"Фриланс"',
  mission = 10000,
  period = 7;
  
let showTypeOf = function(data) {
   console.log(data, typeof(data));
  };

const getExpensesMonth = function(a, b) { // Объявил функцию getExpensesMonth
  return a + b;
};

let expensesMonth = getExpensesMonth(amount1, amount2); // Возврат суммы расходов


const getAccumulatedMonth = function(a, b) { // Объявил функцию getAccumulatedMonth
  return a - b;
};

let accumulatedMonth = getAccumulatedMonth(money, expensesMonth); // Возврат накоплений за месяц


const getTargetMonth = function(a, b) {  // Объявил функцию getAccumulatedMonth
  return a / b;
};

let targetMonth = getTargetMonth(mission, accumulatedMonth); // Период за который будет достигнута цель


let budgetDay = accumulatedMonth / 30; // Пересчитали бюджен на день согласно новым требованиям

const getStatusIncome = function(){

if (budgetDay >= 1200) {
   return('"У вас высокий уровень дохода"');
   } else if ( budgetDay >= 600) {
   return('"У вас средний уровень дохода"');
   } else if (budgetDay >= 0) {
   return('"К сожалению у вас уровень дохода ниже среднего"');
   } else {
   return('что-то пошло не так');
   }
};
//Пишем конструкцию условий для рассчёта уровня дохода

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцам');
console.log('Цель заработать ' + mission + ' рублей');
console.log('Расходы: ', addExpenses.toLowerCase().split(', '));
console.log('Бюджет на месяц:' + budgetMont);
// Вычисляем бюджет на месяц
console.log('Цель будет достигнута за ' + Math.ceil(mission / budgetMont) + ' месяцев');
// Считаем за сколько месяцев будет достигнута цель по накоплению
console.log('Бюджет на день: ' + Math.floor(budgetDay));
// Поправляем budgetDay учитывая бюджет на месяц

console.log(myIncome);
