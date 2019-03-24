
import Mock from 'mockjs'

export default {
  list: () => {
    const items = Mock.mock({
      'items|100': [{
        id: '@id',
        datetime: '@datetime',
        tel: /^1[34578]\d{9}/,
        remarks: '@cparagraph',
        username: '@cname',
        num: '@integer(0,50)',
        'pin|1': ['未核销', '已核销']
      }]
    })
    return {
      code: 20000,
      data: items
    }
  }
}
