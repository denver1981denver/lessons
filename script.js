'use strict';

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
// функция проверки данных
let money;

  // cпрашиваем у пользователя месячный доход
const  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
  // просим пользователя перечислить возможные расходы за рассчитываемый период  
  deposit = confirm('"Есть ли у вас депозит в банке?"'),
  // спрашиваем у пользователя про наличие депозита в банке
  
  income = '"Фриланс"',
  mission = 10000,
  period = 7;

const start = function() {
  do {
  money = prompt('Ваш месячный доход?');
}
 while (!isNumber(money));
};
start(); 
 

const showTypeOf = function(data) {
   console.log(data, typeof(data));
  };
   showTypeOf(money);
   showTypeOf(income);
   showTypeOf(deposit);

let expenses1, 
    expenses2;

const getExpensesMonth = function() { 
  let sum = 0;

  for (let i=0; i < 2; i++) {
    expenses1 = prompt('Введите обязательную статью расходов'); 
    expenses2 = prompt('Во сколько это обойдётся?');
  while (!isNumber(expenses2)) {
    expenses2 = prompt('Во сколько это обойдётся?');
    }
    sum += +expenses2;
  }
  return sum;
};

const expensesAmount = getExpensesMonth();


const getAccumulatedMonth = function(money, expensesAmount) { // Объявил функцию getAccumulatedMonth
  return money - expensesAmount;
};

const accumulatedMonth = getAccumulatedMonth(money, expensesAmount); // Возврат накоплений за месяц


const getTargetMonth = function() {  // Объявил функцию getAccumulatedMonth
  return mission / accumulatedMonth;
};
const getStatusTargetMonth = function() {
  if(getTargetMonth() < 0) {
  return('Цель не будет достигнута');
} else {
  return ('Цель будет достигнута за ' + getTargetMonth() + ' месяцев');
}
};
const budgetDay = accumulatedMonth / 30; // Пересчитали бюджен на день согласно новым требованиям

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

console.log('Cумма всех обязательных расходов за месяц: ', expensesAmount);
console.log('Расходы: ', addExpenses.toLowerCase().split(', ')); 
console.log(getStatusTargetMonth());
console.log('Бюджет на день: ' + Math.floor(budgetDay));
console.log(getStatusIncome());
// консоль