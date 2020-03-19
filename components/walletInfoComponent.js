import {$} from '../utils/index.js'

class WalletInfoComponent {
  constructor({ userModel, productModel }) {
    this.userModel = userModel
    this.productModel = productModel
    this.registerObserver()
  }

  render(data) {
    const cashList = data.reduce((list, cash) => {
      list += 
        `<li>
          <button value="${cash.value}">${cash.value}원</button>
          <span>${cash.number}</span>개
        </li>`
        return list
    }, "")
    return `
    <ul class="wallet-list">
      ${cashList}
    </ul>
    `
  }

  eventHandler() {
    $('.wallet-view').addEventListener("click", this.eventWalletbutton.bind(this));
  }

  eventWalletbutton(e) {
    if(e.target.tagName !== "BUTTON") return
    if(e.target.nextElementSibling.innerText == 0) return
    this.userModel.changeWalletInfo(e);
    this.userModel.changeExpenseInfo(e)
    this.productModel.changeWalletLogInfo(e)
  }

  registerObserver() {
    this.userModel.addEvent("changeWalletData", this.changeRenderWalletInfo.bind(this));
  }

  changeRenderWalletInfo(data) {
    const targetElement = $(`button[value="${data.value}"]`);
    targetElement.nextElementSibling.innerText = `${data.number}`
  }
}

export default WalletInfoComponent