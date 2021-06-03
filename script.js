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
  budgetMont = money - (amount1 + amount2),
  income = '"Фриланс"',
  mission = 10000,
  period = 7,
  budgetDay = money / 30; 
let  myIncome;

if (budgetDay >= 1200) {
   alert('"У вас высокий уровень дохода"');
} else if ( budgetDay >= 600) {
   alert('"У вас средний уровень дохода"');
} else if (budgetDay >= 0) {
   alert('"К сожалению у вас уровень дохода ниже среднего"');
   myIncome = '"К сожалению у вас уровень дохода ниже среднего"';
} else {
   alert('что-то пошло не так');
}
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
