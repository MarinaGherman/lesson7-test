let startBtn = document.getElementById('start'),

    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('.checksavings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    
    let money, time;

    startBtn.addEventListener('click', function() {
        time = prompt('Введите дату в формате YYYY-MM-DD', '');
        money = +prompt('Ваш бюджет на месяц?', '');

        while (isNaN(money) || money == '' || money == null) {
            money = prompt('Ваш бюджет?','');
        }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money;
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    });
    expensesBtn.addEventListener('click', function() {
            let sum = 0;

            for (let i =0;i < expensesItem.length; i++) {
                let a = expensesItem[i].value,
                    b = expensesItem[++i].value;

                if ((typeof(a)) != null && (typeof(b)) != null && a!= '' && b != '' && a.length <  50) {
                console.log('все верно');

                appData.expenses[a] = b;
                sum += +b;
                } else {
                    i = i - 1;
                }
            }
            expensesValue.textContent = sum;

    });
     optionalExpensesBtn.addEventListener('click', function() {
         for (i = 0; i < optionalExpensesItem.length; i++) {
             let opt = optionalExpensesItem[i].value;
             appData.optionalExpenses[i] = opt;
             optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
         }

     });

     countBtn.addEventListener ("click", function() {

         if (appData.budget != undefined) {
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            daybudgetValue.textContent = appData.moneyPerDay;
   
            if (appData.moneyPerDay < 100) {
   
               levelValue.textContent = 'Минимальныйуровень достатка';
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
               levelValue.textContent = 'Средний уровень достатка';
            } else if (appData.moneyPerDay > 2000) {
               levelValue.textContent = 'Высокий уровень достатка';
            } else { 
               levelValue.textContent = 'Произошла ошибка';
           }
    
         }else {
             daybudgetValue.textContent = 'Произошла ошибка'; 
         }
    });

    incomeItem.addEventListener('input', function() {
        let items = incomeItem.value;
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
    
    });

    checkSavings.addEventListener('click', function() {
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }

    });
     sumValue.addEventListener("click", function() {
         if (appData.savings == true) {
             let sum = +sumValue.value,
                 percent = +percentValue.value;

             appData.monthIncome = sum/100/12*percent;
             appData.yearIncome = sum/100*percent;

             monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
             yearsavingsValue.textContent = appData.yearIncome.toFixed(1);


         }

     });

    percentValue.addEventListener("click", function() {

         if (appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearsavingsValue.textContent = appData.yearIncome.toFixed(1);

             
         }

     });

    const appData = {
        budget: money,
        expenses: {},
        optionalExpenses: {},
        income: [],
        timeData: time,
        savings: false
    };
