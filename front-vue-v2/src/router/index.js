import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/pages/create-location/CreateLocationComponent.vue'),
  },
  {
    path: '/list-location',
    name: 'list',
    component: () => import('../components/pages/list-location/ListLocationComponent.vue'),
  },
  {
    path: '/edit-location/:id',
    name: 'update',
    component: () => import('../components/pages/edit-location/EditLocationComponent.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
