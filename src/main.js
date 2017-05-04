// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Player from './components/Player.vue'
import Job from './components/Job.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/player/:id',
    component: Player
  },
  {
    path: '/job',
    component: Job
  },
];

const router = new VueRouter({
  routes: routes
});

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router: router,
  render: (h) => h(App)
})
