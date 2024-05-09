import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from './components/HelloWorld.vue';
import UserList from './components/UserList.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history', // Use 'history' mode for cleaner URLs; you can also use 'hash' mode if you prefer
  routes: [

    {
      path: '/userlist',
      name: 'UserList',
      component: UserList,
    },
  ],
});

export default router;
