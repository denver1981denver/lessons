'use strict';

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
let expensesItems = document.querySelectorAll('.expenses-items'),
    incomeItems = document.querySelectorAll('.income-items');

const start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    incomePlus = document.getElementsByTagName('button')[0],
    expensesPlus = document.getElementsByTagName('button')[1],
    depositCheck = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'), 
    budgetMonthValue = document.getElementsByClassName('result-total')[0], 
    budgetDayValue = document.getElementsByClassName('result-total')[1], 
    expensesMonthValue = document.getElementsByClassName('result-total')[2],
    additionalIncomeValue = document.getElementsByClassName('result-total')[3],
    additionalExpensesValue = document.getElementsByClassName('result-total')[4],
    incomePeriodValue = document.getElementsByClassName('result-total')[5],
    targetMonthValue = document.getElementsByClassName('result-total')[6],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('input.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('input.expenses-title'),
    additionalExpenses = document.querySelector('.additional_expenses'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('[type="range"]'),
    periodAmount = document.querySelector('.period-amount');
    

    
 const appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    income: {}, 
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    expensesMonth: 0, 
    addExpenses: [], 
    deposit: false, 
    percentDeposit: 0, 
    moneyDeposit: 0, 
    start: function() {

        if(salaryAmount.value.trim() !== ''){
        this.budget = +salaryAmount.value;
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();
        this.showResult();
 };

       const allInputs = document.querySelectorAll('input[type=text]');
        allInputs.forEach(item => {
        item.disabled = true;
});
       start.style.display = 'none';
       cancel.style.display = 'block';
       
    },
    showResult: function(){
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = Math.round(appData.budgetDay);
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();
        periodSelect.addEventListener('input',
             this.calcPeriod);
        
    },

    addExpensesBlock: () => { 
       const cloneExpensesItem = expensesItems[0].cloneNode(true);
       expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
       expensesItems = document.querySelectorAll('.expenses-items');
       if(expensesItems.length === 3) {
           expensesPlus.style.display = 'none';
       }
    },
    getExpenses: function() {
        expensesItems.forEach(item => {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !==''){
                this.expenses[itemExpenses] = +cashExpenses;
            }
        });
    },
    addIncomeBlock: () => { 
        const cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        }
     },
    getIncome: function(){
        incomeItems.forEach(item => {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !==''){
                this.income[itemIncome] = +cashIncome;
            }
        });
    },
    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(item =>{
            item = item.trim();
            if (item !==''){
                this.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function(){
        additionalIncomeItem.forEach(item => {
            let itemValue = item.value.trim();
            if(itemValue !== '') {
                this.addIncome.push(itemValue);
            } 
        });
    },

    getExpensesMonth: function() { // Функция возвращает сумму всех обязательных расходов за месяц
        this.expensesMonth = 0;
        for (let elem in appData.expenses) {
          this.expensesMonth += this.expenses[elem];
        }
    },
    getBudget: function() { // Функция возвращает Накопления за месяц (Доходы минус расходы)
        if (!this.budget) {
            this.budget = 0;
        }
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = (this.budgetMonth / 30);
    },
    getTargetMonth: function() { // Подсчитывает за какой период будет достигнута цель
        return targetAmount.value / this.budgetMonth;
    },
    getStatusIncome: function() { // Статус дохода (низкий / средний / высокий)
      if (this.budget >= 1200) {
    return('У вас высокий уровень дохода');
    } else if ( this.budget >= 600) {
    return('У вас средний уровень дохода');
    } else if (this.budget >= 0) {
    return('К сожалению у вас уровень дохода ниже среднего');
    } else {
    return('что-то пошло не так');
    }   
    },
    getInfoDeposit: function(){
      this.moneyDeposit = 0;
    },
    calcPeriod: function() {
      return  this.budgetMonth * periodSelect.value;
    },
    reset: function () {
        const inputTextData = document.querySelectorAll('.data input[type = text]'),
            resultInputAll = document.querySelectorAll('.result input[type = text]');
        inputTextData.forEach(function(elem) {
            elem.value = '';
            elem.removeAttribute('disabled');
            periodSelect.value = '0';
            periodAmount.innerHTML = periodSelect.value;
            start.style.display = 'block';
            cancel.style.display = 'none';

        });
         resultInputAll.forEach(function(elem) {
             elem.value = '';
         });
    },
  
    changePeriodSelect:(event) => {
        document.querySelector('.period-amount').textContent = event.target.value;
        incomePeriodValue.value = appData.calcPeriod();
    },
     blockStart: () => {
        start.disabled = !salaryAmount.value.trim();
     }
};
appData.blockStart();
start.addEventListener('click', appData.start.bind(appData));
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.changePeriodSelect);
salaryAmount.addEventListener('input', appData.blockStart);
cancel.addEventListener('click', appData.reset.bind(appData));








