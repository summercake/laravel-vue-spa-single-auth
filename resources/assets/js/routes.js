import VueRouter from 'vue-router'
import Store from './store/index'
import JwtToken from './helpers/jwt'

let routes = [
  {
    path: '/',
    name: 'home',
    component: require('./components/pages/Home'),
    meta: {},
  },
  {
    path: '/posts/:id',
    name: 'posts',
    component: require('./components/posts/Post'),
    meta: {},
  },
  {
    path: '/register',
    name: 'register',
    component: require('./components/register/Register'),
    meta: {requiresGuest: true},
  },
  {
    path: '/login',
    name: 'login',
    component: require('./components/login/Login'),
    meta: {requiresGuest: true},
  },
  {
    path: '/confirm',
    name: 'confirm',
    component: require('./components/confirm/Email'),
    meta: {},
  },
  {
    path: '/profile',
    name: 'profile',
    component: require('./components/user/ProfileWrapper'),
    children: [
      {
        path: '',
        name: 'profile',
        component: require('./components/user/Profile'),
        meta: {requiresAuth: true},
      },
      {
        path: 'edit-profile',
        name: 'profile.editProfile',
        component: require('./components/user/EditProfile'),
        meta: {requiresAuth: true},
      },
      {
        path: 'edit-password',
        name: 'profile.editPassword',
        component: require('./components/password/EditPassword'),
        meta: {requiresAuth: true},
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  // if user has not signed in, it will transfer to login page
  //console.log('1234')
  if (to.meta.requiresAuth) {
    if (Store.state.AuthUser.authenticated || JwtToken.getToken()) {
      return next()
    } else {
      return next({'name': 'login'})
    }
  }
  // if user has signed in, it will transfer to home page
  if (to.meta.requiresGuest) {
    if (Store.state.AuthUser.authenticated || JwtToken.getToken()) {
      //console.log('already login')
      return next({'name': 'home'})
    } else {
      //console.log('not login')
      return next()
    }
  }
  next()
})

export default router
