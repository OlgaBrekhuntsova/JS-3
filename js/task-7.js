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
    this.transactions.push(this.createTransaction(amount, Transaction['DEPOSIT']));
    console.log(this.transactions);
    return this.getBalance();
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
      this.transactions.push(this.createTransaction(amount, Transaction['WITHDRAW']));
      return this.getBalance();
    }
    else { if (confirm('Снятие невозможно, недостаточно средств. Хотите осуществить другую операцию?')){ dataInput() } };
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    console.log(this.balance);
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
    console.log(type);
    if (type === Transaction['DEPOSIT']) {
      totalDeposits += transactionObj['amount'];
    }
      else
      {totalWithdraws += transactionObj['amount'];
      };
    return console.log(`Всего на счет было внесено ${totalDeposits} у.е.\nВсего со счета было снято ${totalWithdraws} у.е.`);
  },
  };
const transactionObj = { id: 0, type: 'нет транзакций', amount: 0 };
const transactions = [];
let totalDeposits = 0;
let totalWithdraws = 0;
// Функция ввода суммы
const amountInput = function () {
  const amountCurrent = Number(prompt('Введите сумму'));
  switch (amountCurrent) {
    case null:
      break;
    case '> 0':
      const amount = amountCurrent;
      return amount;
     default:
       if (confirm('Сумма не корректна. Введите число больше 0. Попробовать еще раз?')) {
        return amountInput();
     };
  };
// Функция ввода типа данных
const dataInput = function () {
  switch (prompt('Введите тип транзакции: + (пополнение) или - (снятие)')) {
    case '+':
      console.log(Transaction['DEPOSIT']);
      account.deposit(amountInput());
      break;
  
    case '-':
      console.log(Transaction['WITHDRAW']);
      account.withdraw(amountInput());
      break;
    case null:
      break;
    default:
      if (confirm('Введите корректно тип транзакции: значок "плюс" или "минус". Попробовать еще раз?')) { dataInput() };
  }
};


dataInput();
console.log(transactionObj);

while (confirm('Желаете выполнить еще одну транзакцию?')) { dataInput() };
console.log(`Баланс счета: ${account.balance}\nИстория транзакций: ${account.transactions}`)