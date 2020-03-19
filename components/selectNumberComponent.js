import {$} from '../utils/index.js'

class SelectNumberComponent {
  constructor({ productModel }) {
    this.productModel = productModel
  }
  render() {
    return `
      <div class="select-number">
          <button value="number">1</button>
          <button value="number">2</button>
          <button value="number">3</button>
          <button value="number">4</button>
          <button value="number">5</button>
          <button value="number">6</button>
          <button value="number">7</button>
          <button value="number">8</button>
          <button value="number">9</button>
          <button value="cancel">취소</button>
          <button value="number">0</button>
          <button value="check">확인</button>
      </div>`
  }

  eventHandler() {
    $('.production-select-view').addEventListener("click", this.eventWalletbutton.bind(this))
  }

  eventWalletbutton(e) {
    const {target:{value, tagName }} = e
    if(tagName !== "BUTTON") return
    if(value === 'cancel') {
      // console.log(e.target.value)
    } else if (value === 'check') {
      const inputPrice = $('.price').innerText
      this.productModel.clickedCheckEvent(parseInt(inputPrice))
    } else {
      const productTypeCount = $('.product-list').childElementCount
      this.productModel.changeSelectLogInfo(e, productTypeCount)
    }
  }
}

export default SelectNumberComponent