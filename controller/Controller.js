import Observer from '../utils/observe.js'

class Controller {
  constructor({
    model: { productModel, userModel },
    view: { productView, productSelectView, walletView },
    component: {selectNumberComponent, walletInfoComponent}
  }) {
    this.productModel = productModel
    this.userModel = userModel
    this.productView = productView
    this.productSelectView = productSelectView
    this.walletView = walletView
    this.selectNumberComponent = selectNumberComponent
    this.walletInfoComponent = walletInfoComponent
  }

  initialize () {
    this.fetchProductData();
    this.componentEventHandler()
  }

  // 초기 랜더링
  fetchProductData() {
    this.productModel.fetchData()
    this.userModel.fetchData()
  }

  // component 핸들러
  componentEventHandler() {
    this.selectNumberComponent.eventHandler()
    this.walletInfoComponent.eventHandler()
  }
}

export default Controller