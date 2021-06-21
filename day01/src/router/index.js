import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CompanyProfile from '../views/CompanyProfile.vue'
import AncientArtCenter from '../views/AncientArtCenter.vue'
import ConsultationNews from '../views/ConsultationNews.vue'
import App from '../views/App.vue'
import ProductCenter from '../views/ProductCenter.vue'
import ContactUs from '../views/ContactUs.vue'
import Product from '../views/Product.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Product',
    name: 'Product',
    component: Product
  },
  {
    path: '/ContactUs',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/ProductCenter',
    name: 'ProductCenter',
    component: ProductCenter
  },
  {
    path: '/App',
    name: 'App',
    component: App
  },
  {
    path: '/ConsultationNews',
    name: 'ConsultationNews',
    component: ConsultationNews
  },
  {
    path: '/AncientArtCenter',
    name: 'AncientArtCenter',
    component: AncientArtCenter
  },
  {
    path: '/CompanyProfile',
    name: 'CompanyProfile',
    component: CompanyProfile
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
