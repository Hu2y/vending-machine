import {$} from '../utils/index.js'

class WalletView {
  constructor({
    walletInfoComponent, 
    totalCashComponent,
    userModel,
    walletViewArea
  }) {
    this.walletInfoComponent = walletInfoComponent,
    this.totalCashComponent = totalCashComponent,
    this.userModel = userModel,
    this.walletViewArea = walletViewArea,
    this.registerObserver()
  }

  initRender(walletData) {
    this.walletViewArea.innerHTML = this.initTemplate(walletData)
  }

  initTemplate(walletData) {
    return `
      ${this.walletInfoComponent.render(walletData)}
      ${this.totalCashComponent.render()}`
  }

  registerObserver() {
    this.userModel.addEvent("initWalletViewRender", this.initRender.bind(this))
  }
}

export default WalletView