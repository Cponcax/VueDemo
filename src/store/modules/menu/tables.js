import lazyLoading from './lazyLoading'

export default {
  name: 'Tables',
  meta: {
    icon: 'fa-table',
    expanded: false
  },

  children: [
    {
      name: 'BasicTables',
      path: '/tables/basic',
      meta: {
        label: 'Basic Tables',
        link: 'tables/Basic.vue'
      },
      component: lazyLoading('tables/Basic')
    },
    {
      name: 'Pagination',
      path: '/tables/pagination',
      meta: {
        label: 'Pagination',
        link: 'tables/Pagination.vue'
      },
      component: lazyLoading('tables/Pagination')
    },
    {
      name: 'Canvas',
      path: '/tables/canvas',
      meta: {
        label: 'Canvas',
        link: 'tables/Canvas.vue'
      },
      component: lazyLoading('tables/Canvas')
    }
  ]
}
