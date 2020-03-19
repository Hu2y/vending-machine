import { $ } from '../utils/index.js'

class LogComponent {
  constructor({ productModel }) {
    this.productModel = productModel
    this.registerObserver()
  }
  render(data= '금액을 투입해주세요') {
    return `
    <div class="select-production">
      <ul class="logList">
        <li>${data}</li>
      </ul>      
    </div>
    `
  }

  registerObserver() {
    this.productModel.addEvent("walletLogRender", this.walletLogRenderInfo.bind(this))
    this.productModel.addEvent("errorLog", this.errorLogRender.bind(this))
    this.productModel.addEvent("successLog", this.successLogRender.bind(this))
  }

  walletLogRenderInfo(logData) {
    const logArea = $('.logList')
    logArea.innerHTML += `<li>- ${logData}이 투입되었습니다</li>`
    this.fixLogScroll()
  }
  
  errorLogRender(logData) {
    const logArea = $('.logList')
    logArea.innerHTML += `<li style="color: red;">- ${logData}</li>`
    this.fixLogScroll()
  }

  successLogRender(logData) {
    const logArea = $('.logList')
    logArea.innerHTML += `<li style="color: blue;">- ${logData}</li>`
    this.fixLogScroll()
  }

  fixLogScroll() {
    $('.select-production').scrollTop += $('.logList li').scrollHeight
  }
}
export default LogComponent