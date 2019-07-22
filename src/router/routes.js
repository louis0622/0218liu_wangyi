import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Identify from '../pages/Identify/Identify.vue'
import Personal from '../pages/Personal/Personal.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name:'Home',
    component: Home,
  },
  {
    path: '/classify',
    name:'Classify',
    component: Classify,
  },
  {
    path: '/identify',
    name:'Identify',
    component: Identify,
  },
  {
    path: '/personal',
    name:'Personal',
    component: Personal,
  },
  {
    path: '/shopping',
    name:'Shopping',
    component: Shopping,
  },
]
