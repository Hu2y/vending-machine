import {$} from '../utils/index.js'

class InputNumberComponent {
  constructor({ userModel, productModel }) {
    this.userModel = userModel
    this.productModel = productModel
    this.registerObserver()
  }
  render(data = 0) {
    return `
      <div class="select-price">
        <div>
          투입 금액 : <span class="price">${data}</span><span>원</span>
      </div>
    </div>`
  }

  registerObserver() {
    this.userModel.addEvent("changeExpenseData", this.changeRenderExpense.bind(this))
    this.productModel.addEvent("changeExpenseData", this.changeRenderExpense.bind(this))
  }

  changeRenderExpense(expenseTotal) {
    console.log(expenseTotal)
    $('.price').innerText = expenseTotal
  }
}

export default InputNumberComponent