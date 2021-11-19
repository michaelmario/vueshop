import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../firebase';

const routerOptions = [
  { path: '/landing', component: 'Landing', meta: { requiresAuth: true } },
  { path: '/auth', component: 'Auth' },
  { path: '/landing', component: 'Landing', meta: { requiresAuth: true } },
 
 
]
const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import( /* webpackChunkName: "{{route.component}}" */ `../views/${route.component}.vue`)
  }
})


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = auth.currentUser;
  if (requiresAuth && !isAuthenticated) {
    next('/auth');
  } else {
    next();
  }
});
export default router
