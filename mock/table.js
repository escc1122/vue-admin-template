const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

module.exports = [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const { page } = config.query
      let items = data.items
      if (page) {
        if (page === '1') {
          items = data.items.slice(0, 20)
        } else if (page === '2') {
          items = data.items.slice(20)
        }
      }

      return {
        code: 20000,
        data: {
          total: 30,
          items: items,
          page: page
        }
      }
    }
  }
]
