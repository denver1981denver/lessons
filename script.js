'use strict';

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
    
const AppData = function () {
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income = {}; 
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
     this.expensesMonth = 0; 
     this.addExpenses = []; 
    this.deposit = false; 
    this.percentDeposit = 0; 
    this.moneyDeposit = 0; 
};

AppData.prototype.start = function() {

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
};
AppData.prototype.showResult = function() {
        const _this = this;
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = Math.round(appData.budgetDay);
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();
        periodSelect.addEventListener('input',
        _this.calcPeriod);
};

AppData.prototype.addExpensesBlock = () => { 
    const cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if(expensesItems.length === 3) {
    expensesPlus.style.display = 'none';
    }
};
AppData.prototype.getExpenses = function() {
    expensesItems.forEach(item => {
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !==''){
        this.expenses[itemExpenses] = +cashExpenses;
        }
    });
};
AppData.prototype.addIncomeBlock = () => { 
    const cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if(incomeItems.length === 3) {
    incomePlus.style.display = 'none';
    }
};
AppData.prototype.getIncome = function(){
    incomeItems.forEach(item => {
    let itemIncome = item.querySelector('.income-title').value;
    let cashIncome = item.querySelector('.income-amount').value;
    if(itemIncome !== '' && cashIncome !==''){
    this.income[itemIncome] += +this.cashIncome;
        }
    });
};
AppData.prototype.getAddExpenses = function(){
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(item =>{
    item = item.trim();
    if (item !==''){
    this.addExpenses.push(item);
        }
    });
};
AppData.prototype.getAddIncome = function(){
    additionalIncomeItem.forEach(item => {
        let itemValue = item.value.trim();
        if(itemValue !== '') {
            this.addIncome.push(itemValue);
        } 
    });
};

AppData.prototype.getExpensesMonth = function() { 
    this.expensesMonth = 0;
    for (let elem in appData.expenses) {
        this.expensesMonth += this.expenses[elem];
    }};
AppData.prototype.getBudget = function() { 
    if (!this.budget) {
    this.budget = 0;
    }
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = (this.budgetMonth / 30);
};
AppData.prototype.getTargetMonth = function() { 
    return targetAmount.value / this.budgetMonth;
};
AppData.prototype.getStatusIncome = function() { 
      if (this.budget >= 1200) {
    return('У вас высокий уровень дохода');
    } else if ( this.budget >= 600) {
    return('У вас средний уровень дохода');
    } else if (this.budget >= 0) {
    return('К сожалению у вас уровень дохода ниже среднего');
    } else {
    return('что-то пошло не так');
    }   
};
AppData.prototype.getInfoDeposit = function(){
    this.moneyDeposit = 0;
};
AppData.prototype.calcPeriod = function() {
    return  this.budgetMonth * periodSelect.value;
};
AppData.prototype.reset = function () {
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
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income = {}; 
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expensesMonth = 0; 
    this.addExpenses = []; 
    this.blockStart(); 
    };
  
AppData.prototype.changePeriodSelect =(event) => {
    document.querySelector('.period-amount').textContent = event.target.value;
    incomePeriodValue.value = appData.calcPeriod();
};
 AppData.prototype.blockStart = () => {
    start.disabled = !salaryAmount.value.trim();
};
     
AppData.prototype.eventListeners = function() {
this.blockStart();        
start.addEventListener('click', this.start.bind(appData));
expensesPlus.addEventListener('click', this.addExpensesBlock);
incomePlus.addEventListener('click', this.addIncomeBlock);
periodSelect.addEventListener('input', this.changePeriodSelect);
salaryAmount.addEventListener('input', this.blockStart);
cancel.addEventListener('click', this.reset.bind(appData));
};

const appData = new AppData();
    
appData.eventListeners();









