import Vue from 'vue'
import VueRouter from 'vue-router'
import ToDo from '@/views/tasks/TaskList.vue'
import EditTask from '@/views/tasks/EditTask.vue'
import AddEmployee from '@/views/employees/addEmployee.vue' 
import EditEmployee from '@/views/employees/editEmployee.vue'
import AssignTask from '@/views/assignTask/assignTask.vue'
import AssignTaskTable from '@/views/assignTask/assignTaskTable.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ToDoList',
    component: ToDo
  },
  {
    path: '/edit/:id',
    name: 'Edit-Task',
    component: EditTask
  },
  {
    path: '/Add-Employee',
    name: 'Add-Employee',
    component: AddEmployee
  },
  {
    path: '/Edit-Employee/:id',
    name: 'Edit-Employee',
    component: EditEmployee
  },
  {
    path: '/Assign-Task',
    name: 'Assign-Task',
    component: AssignTask
  },
  {
    path: '/Assign-Task-Table',
    name: 'Assign-Task-Table',
    component: AssignTaskTable
  },
]

const router = new VueRouter({
  routes
})

export default router
