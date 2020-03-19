class ProductView {
  constructor({productComponent, productModel, productArea}) {
    this.productComponent = productComponent
    this.productModel = productModel,
    this.productArea = productArea
    this.registerObserver()
  }

  initRender(data) {
    this.productArea.innerHTML = this.initTemplate(data);
  }

  initTemplate(data) {
    return this.productComponent.render(data)
  }

  registerObserver() {
    this.productModel.addEvent("initProductViewRender", this.initRender.bind(this))
  }
}

export default ProductView