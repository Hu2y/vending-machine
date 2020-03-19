import { $$ } from '../utils/index.js'

class ProductComponent {
  constructor({ userModel, productModel }) {
    this.userModel = userModel
    this.productModel = productModel
    this.registerObserver()
  }
  render(data) {
    const productList = data.reduce((list, product) => {
      list += 
        `<li>
          <span class="prod-index">${product.index}</span>
          <span class="prod-name">${product.name}</span>
          <span class="prod-price">${product.price}</span>
        </li>`
        return list
    }, "")
    return `
      <ul class="product-list">
        ${productList}
      </ul>`
  }

  registerObserver() {
    this.productModel.addEvent("highlightInitRedner", this.highlightProductRedner.bind(this))
    this.userModel.addEvent("highlightProduct", this.highlightProductRedner.bind(this));
  }

  initRender(productPriceList) {
    [...productPriceList].forEach(productList => 
      productList.parentNode.classList.remove('prod-selected'))
  }
  
  highlightProductRedner(inputData) {
    const productPriceList = $$('.prod-price');
    this.initRender(productPriceList);

    [...productPriceList]
      .filter(price => 
        price.innerText <= parseInt(inputData))
      .forEach(productList => 
        productList.parentNode.classList.add('prod-selected'))
  }
}

export default ProductComponent