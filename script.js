'use strict';

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const start = document.getElementById('start'),

    buttonPlusIncome = document.getElementsByTagName('button')[0],

    expensesPlus = document.getElementsByTagName('button')[1],

    checkboxDeposit = document.querySelector('#deposit-check'),

    inputAdditionalIncomeItem = document.querySelectorAll('.additional_income-item'),

    inputBudgetDayValue = document.getElementsByClassName('result-total')[1], 

    inputExpensesMonthValue = document.getElementsByClassName('result-total')[2],

    inputAdditionalInc = document.getElementsByClassName('result-total')[3],

    inputAdditionalExpenses = document.getElementsByClassName('result-total')[4],

    inputIncomePeriod = document.getElementsByClassName('result-total')[5],

    inputTargetMonth = document.getElementsByClassName('result-total')[6],

    salaryAmount = document.querySelector('.salary-amount'),

    inputIncomeTitle = document.querySelector('input.income-title'),
    
    inputincomeAmount = document.querySelector('.income-amount'),

    inputExpensesTitle = document.querySelector('input.expenses-title'),

    //inputExpensesAmount = document.querySelector('.expenses-amount'),
    //expensesItems = document.querySelectorAll('.expenses-items'),
    inputAdditionalExpensesItem = document.querySelector('.additional_expenses-item'),

    inputDepositAmount = document.querySelector('.deposit-amount'),

    inputDepositPercent = document.querySelector('.deposit-percent'),

    inputTargetAmount = document.querySelector('.target-amount'),

    inputPeriodSelect = document.querySelector('[type="range"]');

let expensesItems = document.querySelectorAll('.expenses-items');

const appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    income: {}, 
    addIncome: [],
    expenses: {},
    expensesMonth: 0, 
    addExpenses: [], 
    deposit: false, 
    percentDeposit: 0, 
    moneyDeposit: 0, 
    mission: 10000, 
    period: 7,
    start: function() {

        if(salaryAmount.value === ''){
            alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
            return;
        }
        
        appData.budget = salaryAmount.value;
        console.log('salaryAmount.value:', salaryAmount.value);

        appData.getExpenses();
       
         appData.getExpensesMonth();
         appData.getBudget();
    },
    addExpensesBlock: function(){ //поля для плюсиков
      
       const cloneExpensesItem = expensesItems[0].cloneNode(true);
       expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
       expensesItems = document.querySelectorAll('.expenses-items');
       if(expensesItems.length === 3) {
           expensesPlus.style.display = 'none';
       }
    },
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !==''){
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
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

start.addEventListener('click', appData.start);

expensesPlus.addEventListener('click', appData.addExpensesBlock);


appData.getInfoDeposit();

const targetMonth = appData.getTargetMonth();


//console.log(targetMonth >= 0 ?
    //`Цель будет достигнута за: ${targetMonth} месяц(а/ев)` :
    //'Цель не будет достигнута');





