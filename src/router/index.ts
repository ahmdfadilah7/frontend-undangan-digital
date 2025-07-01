import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Templates from '../views/Templates.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import DemoRomanticRose from '../views/demos/DemoRomanticRose.vue'
import DemoGoldenLuxury from '../views/demos/DemoGoldenLuxury.vue'
import DemoBirthdayParty from '../views/demos/DemoBirthdayParty.vue'
import DemoCorporateEvent from '../views/demos/DemoCorporateEvent.vue'
import DemoElegantWedding from '../views/demos/DemoElegantWedding.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/templates',
      name: 'Templates',
      component: Templates
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/demo/romantic-rose',
      name: 'DemoRomanticRose',
      component: DemoRomanticRose,
      meta: {
        hideNavbar: true,
        hideFooter: true
      }
    },
    {
      path: '/demo/golden-luxury',
      name: 'DemoGoldenLuxury',
      component: DemoGoldenLuxury
    },
    {
      path: '/demo/birthday-party',
      name: 'DemoBirthdayParty',
      component: DemoBirthdayParty
    },
    {
      path: '/demo/corporate-event',
      name: 'DemoCorporateEvent',
      component: DemoCorporateEvent
    },
    {
      path: '/demo/elegant-wedding',
      name: 'DemoElegantWedding',
      component: DemoElegantWedding
    }
  ]
})

export default router