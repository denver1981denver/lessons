'use strict';

let money = 10000,
  income = 'Фриланс',
  addExpenses = 'Интернет, Такси, Коммуналка',
  deposit = true,
  mission = 10000,
  period = 7,
  budgetDay = money / 30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцам');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log(budgetDay); 

money = prompt('"Ваш месячный доход?"','10000');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'квартплата,');
deposit = confirm('"Есть ли у вас депозит в банке?"');
const expenses1 = prompt('"Введите обязательную статью расходов?"', 'квартплата'); 
const amount1 = prompt('"Во сколько это обойдётся?"', '3000');
const expenses2 = prompt('"Введите обязательную статью расходов?"', 'расходы на еду');
const amount2 = prompt('"Во сколько это обойдётся?"', '6000');
const budgetMont= (Number(money) - (Number(amount1) + Number(amount2)));
console.log('Бюджет на месяц:' + budgetMont);
console.log('Цель будет достигнута за ' + Math.ceil(mission/budgetMont) +' месяцев');
console.log(Math.floor(budgetDay)); 

if (budgetDay > 1200) {
  alert('"У вас высокий уровень дохода"');
} else if (budgetDay < 0) {
  alert('"Что-то пошло не так"');
} else if (budgetDay === 1200) {
  alert('"Почти элита"');
} else if ( budgetDay > 600) {
  alert('"У вас средний уровень дохода"');
} else if (budgetDay === 0)  {
  alert('"Вы полный ноль"');
} else if (budgetDay < 600) {
  alert('"К сожалению у вас уровень дохода ниже среднего"');
  console.log('"К сожалению у вас уровень дохода ниже среднего"');
}  else {
  alert('почти средний класс');
}