'use strict';
const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const buttonStart = document.getElementById('start'),

    buttonPlusIncome = document.getElementsByTagName('button')[0],

    buttonPlusExpenses = document.getElementsByTagName('button')[1],

    checkboxDeposit = document.querySelector('#deposit-check'),

    inputAdditionalIncomeItem = document.querySelectorAll('.additional_income-item'),

    inputBudgetDayValue = document.getElementsByClassName('result-total')[1], 

    inputExpensesMonthValue = document.getElementsByClassName('result-total')[2],

    inputAdditionalInc = document.getElementsByClassName('result-total')[3],

    inputAdditionalExpenses = document.getElementsByClassName('result-total')[4],

    inputIncomePeriod = document.getElementsByClassName('result-total')[5],

    inputTargetMonth = document.getElementsByClassName('result-total')[6],

    inputSalaryAmount = document.querySelector('.salary-amount'),

    inputIncomeTitle = document.querySelector('input.income-title'),
    
    inputincomeAmount = document.querySelector('.income-amount'),

    inputExpensesTitle = document.querySelector('input.expenses-title'),

    inputExpensesAmount = document.querySelector('.expenses-amount'),

    inputAdditionalExpensesItem = document.querySelector('.additional_expenses-item'),

    inputDepositAmount = document.querySelector('.deposit-amount'),

    inputDepositPercent = document.querySelector('.deposit-percent'),

    inputTargetAmount = document.querySelector('.target-amount'),

    inputPeriodSelect = document.querySelector('[type="range"]');

let money;


const appData = {
    income: {}, // Статья доп дохода
    addIncome: [],
    expenses: {}, // список обязательных статей расходов
    addExpenses: [], // строка с перечислением дополнительных расходов
    deposit: false, // надичие депозита в банке
    percentDeposit: 0, // Проценты депозита
    moneyDeposit: 0, // Сумма заложенная в депозит
    mission: 10000, // желаемая цель (Какую сумму хотите накопить)
    period: 7,
    start: function() {
        do {
            money = prompt('Ваш месячный доход?', 10000);
        } while (!isNumber(money));
    },
    budget: +money, // Доход за месяц
    budgetDay: 0, // Дневной бюджет (доход за месяц / 30)
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {
        if(confirm('Есть ли у вас дополнительный источник заработка?')){
            let itemIncom ='';
            do {
            itemIncom = prompt('Какой у вас дополнительный заработок?', 'Таксую');
            } while ( isNumber(itemIncom) || itemIncom === null); 
            let cashIncom = 0;
            do {
             cashIncom = prompt('Сколько в месяц вы на этом зарабатываете?', 2000);
            } while(!isNumber(cashIncom));
             appData.income[itemIncom] = +cashIncom;
        }
        appData.addExpenses = prompt('Перечислите возможные расходы  через запятую',
            'расходы на еду, коммуналка');
         
        
        const arr = appData.addExpenses.toLowerCase().split(', ');

     

        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++) {
           let   data = 0,
                 value = 0;
             do {    
            data = prompt('Введите обязательную статью расходов', 'коммуналка,расходы на еду');
            } while(isNumber(data) || data === null);
            do {
            value = prompt('Во сколько это обойдёться', 3000);
            } while(!isNumber(value));
            appData.expenses[data] = +value;  
        }
    },
    getExpensesMonth: function() { // Функция возвращает сумму всех обязательных расходов за месяц
        appData.expensesMonth = 0;
        for (let elem in appData.expenses) {
          appData.expensesMonth += appData.expenses[elem];
        }
    },
    getBudget: function() { // Функция возвращает Накопления за месяц (Доходы минус расходы)
        if (!appData.budget) {
            appData.budget = 0;
        }
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function() { // Подсчитывает за какой период будет достигнута цель
        return Math.ceil(appData.mission / appData.budgetMonth);
    },
    getStatusIncome: function() { // Статус дохода (низкий / средний / высокий)
      if (appData.budget >= 1200) {
    return('У вас высокий уровень дохода');
    } else if ( appData.budget >= 600) {
    return('У вас средний уровень дохода');
    } else if (appData.budget >= 0) {
    return('К сожалению у вас уровень дохода ниже среднего');
    } else {
    return('что-то пошло не так');
    }   
    },
    getInfoDeposit: function(){
        if(appData.deposit){
            do {
            appData.percentDeposit = prompt('Какой годовой процент?', '10');
            } while(!isNumber(appData.percentDeposit));
            appData.precentDeposit = +prompt;
            do {
            appData.moneyDeposit = prompt('Какая сумма заложена', 10000);
        } while( !isNumber(appData.moneyDeposit));
        appData.moneyDeposit = +prompt;
    }
    },
    calcSavedMoney: function() {
      return  appData.budgetMonth * appData.period;
    }
};
appData.start();
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getInfoDeposit();

const targetMonth = appData.getTargetMonth();

console.log('Расходы за месяц: ', appData.expensesMonth);
console.log(targetMonth >= 0 ?
    `Цель будет достигнута за: ${targetMonth} месяц(а/ев)` :
    'Цель не будет достигнута');
console.log('Уровень дохода: ', appData.getStatusIncome());
  const arr = appData.addExpenses.toLowerCase().split(', ');
console.log(arr.map(item => item[0].toUpperCase() + item.slice(1)).join(', '));





