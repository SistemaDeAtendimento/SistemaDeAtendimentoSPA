import AllView from '../views/clients/AllView.vue'
import OneView from '../views/clients/OneView.vue'
import EditView from '../views/clients/EditView.vue'
import CreateView from '../views/clients/CreateView.vue'

const defaultRoutes = [
  {
    path: '/client',
    name: 'client-list',
    component: AllView
  },
  {
    path: '/client/:id',
    name: 'client-detail',
    component: OneView
  },
  {
    path: '/client/create',
    name: 'client-create',
    component: CreateView
  },
  {
    path: '/client/edit/:id',
    name: 'client-edit',
    component: EditView
  },
  {
    path: '/client/remove/:id',
    name: 'client-remove',
    component: AllView
  }
]

export default defaultRoutes