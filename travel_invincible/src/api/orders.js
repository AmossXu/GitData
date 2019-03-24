import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/orders/list',
    method: 'get',
    params
  })
}
