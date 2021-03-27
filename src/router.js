import { createRouter, createWebHistory } from 'vue-router'
import Home from './page/Home.vue';

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: { currentColor: 'none' },
    },
    {
      path: '/red',
      name: 'red',
      component: Home,
      props: { currentColor: 'red', time: 6000 },
    },
    {
      path: '/yellow',
      name: 'yellow',
      component: Home,
      props: { currentColor: 'yellow', time: 3000 },
    },
    {
      path: '/green',
      name: 'green',
      component: Home,
      props: { currentColor: 'green', time: 5000 },
    },
    // {
    //   path: '/:name',
    //   name: 'btn',
    //   component: Home,
    // },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === 'home') {
    router.push('red');
  } else {
    next();
  }
});

export default router;