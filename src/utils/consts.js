// 当前 host
const HOST = window.location.host

// 开发
const DEV = 'DEV'

// 生产
const PROD = 'PROD'

// 当前环境
const ENV = HOST === 'localhost:8080' ? DEV : PROD

// 基础地址
const BASE_URL = ENV === DEV ? 'https://www.easy-mock.com/mock' : 'https://www.easy-mock.com/mock'

// 接口地址
const API_URL = BASE_URL + '/590722f27a878d73716e3bec/tickets-booking'

// 分页大小
const PAGE_SIZE = 10

// 网站标题
const TITLE = '网站后台'

export default {
  BASE_URL,
  API_URL,
  PAGE_SIZE,
  TITLE
}
