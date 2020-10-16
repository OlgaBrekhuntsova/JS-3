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
    return transactions.push(this.createTransaction(amount, Transaction['DEPOSIT']));
    console.log(deposit);
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
  withdraw(amount) {},

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {},

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {},
};
const transactionObj = { id: 0, type: 'нет транзакций', amount: 0 };
const transactions = [];
// Функция ввода данных
const dataInput = function () {
   switch (prompt('Введите тип транзакции: + (пополнение) или - (снятие)')) {
    case '+':
      console.log(Transaction['DEPOSIT']);
      // console.log(Number(prompt('Input transaction amount')));
      // account.createTransaction(Number(prompt('Введите сумму')), Transaction['DEPOSIT']);
       account.deposit(Number(prompt('Введите сумму')));
      break;
  
    case '-':
      console.log(Transaction['WITHDRAW']);
      // account.createTransaction(Number(prompt('Введите сумму')), Transaction['WITHDRAW']);
        account.withdraw(Number(prompt('Введите сумму')));
      break;

    default:
      if ( confirm ('Введите корректно тип транзакции: значок "плюс" или "минус". Попробовать еще раз?')) {dataInput()};
       }
}
dataInput();
// createTransaction(Number(prompt('Input transaction amount')), amountOperation);


// console.log(`Баланс счета равен ${account[balance]}|n История транзакций: ${transactions[]});