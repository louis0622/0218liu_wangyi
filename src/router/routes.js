import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Identify from '../pages/Identify/Identify.vue'
import Personal from '../pages/Personal/Personal.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
export default [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/identify',
    component: Identify,
  },
  {
    path: '/personal',
    component: Personal,
  },
  {
    path: '/shopping',
    component: Shopping,
  },
  {
    path: '/',
    redirect: '/home'
  },
]
