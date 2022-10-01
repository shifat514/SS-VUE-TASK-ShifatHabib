import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: "/addstaff",
    name: "addstaff",
    component: () => import('../components/StaffManage.vue')
  },
  {
    path: "/updatestaff/:index",
    name: "updatestaff",
    props:true,
    component: () => import('../components/UpdateStaff.vue'),
   
  },

]

const router = new VueRouter({
  mode: "history", //html file history mode
  base: process.env.BASE_URL,
  routes
})

export default router;
