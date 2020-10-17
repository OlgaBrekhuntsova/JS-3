// Задание 7 - дополнительное, выполнять не обязательно
// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы
// с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    transactionObj['id'] += 1;
    transactionObj['type'] = type;
    transactionObj['amount'] = amount;
    this.getTransactionTotal(type);
    return transactionObj;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.getBalance();
    return this.transactions.push({ ...this.createTransaction(amount, Transaction['DEPOSIT']) });
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.getBalance();
      return this.transactions.push({...this.createTransaction(amount, Transaction['WITHDRAW']) });
    }
    else { if (confirm('Снятие невозможно, недостаточно средств. Хотите осуществить другую операцию?')){ dataInput() } return};
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    console.log(`Баланс: ${this.balance}`);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    if (type === Transaction['DEPOSIT']) {
    totalTransactionsAmounts['deposits'] += transactionObj['amount'];
    }
    else
   {totalTransactionsAmounts['withdraws'] += transactionObj['amount'];
     };
    return  totalTransactionsAmounts;
      },
  };
const transactionObj = { id: 0, type: 'нет транзакций', amount: 0 };
const transactions = [];
const totalTransactionsAmounts = { deposits: 0, withdraws: 0 };

// Функция ввода суммы
const amountInput = function () {
  const amountCurrent = Number(prompt('Введите сумму'));
  if (amountCurrent > 0) {
      return amountCurrent; }
  if (confirm('Сумма не корректна. Введите число больше 0. Попробовать еще раз?')) { return amountInput(); }
  return; 
   };
// Функция ввода типа данных
const dataInput = function () {
  let amountValue;
  switch (prompt('Введите тип транзакции: + (пополнение) или - (снятие)')) {
    case '+':
      amountValue = amountInput();
      console.log(`Cумма депозита: ${amountValue}`);
      if (amountValue) {account.deposit(amountValue) } else { return;};
      break;
  
    case '-':
       amountValue = amountInput();
       console.log(`Cумма снятия: ${amountValue}`);
      if (amountValue) {account.withdraw(amountValue) } else { return;};
      break;
    case null:
      break;
    default:
      if (confirm('Введите корректно тип транзакции: значок "плюс" или "минус". Попробовать еще раз?')) { dataInput() };
  }
};

dataInput();

while (confirm('Желаете выполнить еще одну транзакцию?')) { dataInput() };
console.log(`Баланс счета: ${account.balance}\nИстория транзакций: ${account.transactions}`);
console.log(account.transactions);
console.log(`Всего на счет было внесено ${totalTransactionsAmounts['deposits']} у.е.\nВсего со счета было снято ${totalTransactionsAmounts['withdraws']} у.е.`);
  