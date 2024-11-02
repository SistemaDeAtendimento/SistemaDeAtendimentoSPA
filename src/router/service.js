import AllView from '../views/services/AllView.vue'
import OneView from '../views/services/OneView.vue'
import EditView from '../views/services/EditView.vue'
import CreateView from '../views/services/CreateView.vue'

const defaultRoutes = [
  {
    path: '/service',
    name: 'service',
    component: AllView
  },
  {
    path: '/service/:id',
    name: 'service-detail',
    component: OneView
  },
  {
    path: '/service/create',
    name: 'service-create',
    component: CreateView
  },
  {
    path: '/service/edit/:id',
    name: 'service-edit',
    component: EditView
  },
  {
    path: '/service/remove/:id',
    name: 'service-remove',
    component: AllView
  }
]

export default defaultRoutes