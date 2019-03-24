
import Mock from 'mockjs'

export default {
  list: () => {
    const items = Mock.mock({
      'items|20': [{
        id: '@id',
        title: '@sentence(1, 10)',
        'status|1': ['published', 'draft', 'deleted'],
        author: 'tiantian',
        persion: '132',
        display_time: '@datetime',
        pageviews: '@integer(300, 500)'
      }]
    })
    return {
      code: 20000,
      data: items
    }
  }
}
