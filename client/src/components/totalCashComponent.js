import {$} from '../utils/index.js'

class TotalCashComponent {
  constructor({ userModel }) {
    this.userModel = userModel
    this.totalPrice = 0
    this.registerObserver()
  }
  render(data = 24100) {
    return `
      <div>
        <b class="wallet-sum">${data}원</b>
      </div>
    `
  }

  registerObserver() {
    this.userModel.addEvent("totalWalletData", this.changeRenderTotalPrice.bind(this))
  }

  changeRenderTotalPrice(totalPrice) {
    if(this.totalPrice === totalPrice) return 
    this.totalPrice = totalPrice
    $(".wallet-sum").innerText = `${totalPrice}원`
  }
}

export default TotalCashComponent