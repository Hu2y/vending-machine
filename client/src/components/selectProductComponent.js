import {$} from '../utils/index.js'

class selectProductComponent {
  constructor({productModel}) {
    this.productModel = productModel
    this.registerObserver()
  }
  render(data= 0) {
    return `
      <div class="select-product-number">
        <span>선택된 상품 번호 : </span>
        <span class="select-number-area">${data}</span>
      </div>  
    `
  }

  registerObserver() {
    this.productModel.addEvent("selectLogRender", this.selectLogRenderInfo.bind(this))
  }

  selectLogRenderInfo(productNumber) {
    $('.select-number-area').innerText = productNumber
  }
}

export default selectProductComponent