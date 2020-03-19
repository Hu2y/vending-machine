import {$} from '../utils/index.js'


class ProductSelectView {
  constructor({
    selectProductComponent,
    inputCashComponent, 
    selectNumberComponent,
    logComponent,
    userModel,
    productSelectArea
  }) {
    this.selectProductComponent = selectProductComponent
    this.inputCashComponent = inputCashComponent
    this.selectNumberComponent = selectNumberComponent
    this.logComponent = logComponent
    this.arrComponent = [this.selectProductComponent, this.inputCashComponent, this.selectNumberComponent, this.logComponent],
    this.userModel = userModel
    this.productSelectArea = productSelectArea
    this.registerObserver()
  }

  initRender(data) {
    this.productSelectArea.innerHTML = this.initTemplate()
  }
  
  initTemplate() {
    const selectList = this.arrComponent.reduce((list, item) => {
      list+= item.render()
      return list
    },"")
    return selectList
  }

  registerObserver() {
    this.userModel.addEvent("initSelectViewRender", this.initRender.bind(this))
  }
}

export default ProductSelectView;