import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: "Login"
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if( localStorage.getItem('authObj') ){
          console.log('redirect to dashboard')
          next({name: 'Dashboard'})
        }
        else {
          console.log('redirect to login')
          next()
        }
      }
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      props: true,
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        if( localStorage.getItem('authObj') ){
          console.log('redirect to dashboard')
          next()
        }
        else {
          console.log('redirect to login')
          next({ name: 'Login' })
        }
      }
    },
  ]
})
