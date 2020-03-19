import Observer from "../utils/observe.js"
import {$} from '../utils/index.js'

class ProductModel extends Observer {
  constructor({ PRODUCT_URL }) {
    super()
    this.productNumber = 0
    this.balanceData = 0
    this.productData = {}
    this.PRODUCT_URL = PRODUCT_URL
  }

  async fetchData() {
    const res = await fetch(this.PRODUCT_URL)
    const productData = await res.json()
    this.productData = productData
    this.fireEvent("initProductViewRender", productData)
  }

  changeWalletLogInfo({ target: { innerText }}) {
    let logData = innerText
    this.fireEvent("walletLogRender", logData)
  }

  changeSelectLogInfo({ target: { innerText }}, productTypeCount) {
    let productNumber = innerText
    let productIndex = this.selectProductCount({productNumber, productTypeCount})
    if(productIndex === undefined) {
      productIndex = productNumber
    }
    this.fireEvent("selectLogRender", parseInt(productIndex))
  }

  selectProductCount({productNumber, productTypeCount}) {
    if(parseInt(this.productNumber + productNumber) > productTypeCount) {
      this.fireEvent("errorLog", '상품번호가 잘못 입력되어 상품번호가 초기화 되었습니다')
      this.productNumber = 0
      return this.productNumber
    } 
    this.productNumber += productNumber
    return this.productNumber
  }

  clickedCheckEvent(inputPrice){
    if(parseInt(this.productNumber) === 0){
      return this.purchaseErrorLog()
    }
    const targetProduct = this.productData
      .filter(productIndex => 
        productIndex.index == this.productNumber)
      // .map(target => target.price)
    const targetPrice = targetProduct[0].price
    const selectProduct = targetProduct[0].name

    if(inputPrice < targetPrice) {
      return this.priceErrorLog()
    }
    this.balanceData = inputPrice - targetPrice
    this.getSuccessLog(selectProduct)
    this.productNumber = 0

    this.fireEvent("highlightInitRedner", this.balanceData)
    this.fireEvent("changeExpenseData", this.balanceData)
    this.fireEvent("selectLogRender", this.productNumber)
  }

  purchaseErrorLog() {
    this.fireEvent("errorLog", '상품번호를 입력해주세요')
  }

  priceErrorLog() {
    this.fireEvent("errorLog", '투입금액이 부족합니다')
  }

  getSuccessLog(selectProduct) {
    this.fireEvent("successLog", `${selectProduct} 상품이 구매되었습니다`)
  }
}

export default ProductModel