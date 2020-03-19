import Observer from '../utils/observe.js'

class UserModel extends Observer {
  constructor({ USER_URL }) {
    super()
    this.WALLET_URL = USER_URL
    this.walletData = {}
    this.expense = {}
  }

  async fetchData() {
    const res = await fetch(this.WALLET_URL)
    const walletData = await res.json()
    this.walletData = walletData
    this.initExpense()
    this.fireEvent("initWalletViewRender", walletData);
    this.fireEvent("initSelectViewRender", walletData);
  }

  initExpense() {
    this.expense = this.walletData.map(data=> ({...data}));
    this.expense.forEach(init => init.number = 0);
  }

  computedTotalPrice(targetData) {
    const totalPrice = targetData
      .reduce((price, data) => 
        price += parseInt(data.value) * parseInt(data.number), 0);

    return totalPrice;
  }

  changeExpenseInfo({target: {value}}) {
    this.expense.filter(targetValue => 
        targetValue.value == value)
      .map(expenseWallet => {
        expenseWallet.number += 1;
    });
    console.log(this.expense)

    // 내일 잔돈반환 구현
    const expenseTotal = this.computedTotalPrice(this.expense)
    this.fireEvent("changeExpenseData", expenseTotal)
    this.fireEvent("highlightProduct", expenseTotal)
  }

  changeWalletInfo({target: {value}}) {
    const targetData = this.walletData
      .filter(targetValue => 
        targetValue.value == value)
      .map(wallet => {
        if (wallet.number > 0 ) wallet.number -= 1;

      return wallet
    });
    this.fireEvent("changeWalletData", ...targetData);

    const totalPirce = this.computedTotalPrice(this.walletData);
    this.fireEvent("totalWalletData", totalPirce);
  }
}

export default UserModel