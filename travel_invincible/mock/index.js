import Mock from 'mockjs'
import userAPI from './user'
import tableAPI from './table'

import orderAPI from './orders'

// Fix an issue with setting withCredentials = true, cross-domain request lost cookies
// https://github.com/nuysoft/Mock/issues/300
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function() {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}
// Mock.setup({
//   timeout: '350-600'
// })

// User   调用mock里user.js export defult
Mock.mock(/\/user\/login/, 'post', userAPI.login)
Mock.mock(/\/user\/info/, 'get', userAPI.getInfo)
Mock.mock(/\/user\/logout/, 'post', userAPI.logout)

// Table   调用mock里tabel.js
Mock.mock(/\/table\/list/, 'get', tableAPI.list)

// orders     调用mock里orders.js   自己写的
Mock.mock(/\/orders\/list/, 'get', orderAPI.list)

export default Mock
