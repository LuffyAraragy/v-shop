import { createRouter, createWebHistory } from 'vue-router'

import LayoutDefault from './layouts/LayoutDefault.vue';
import LayoutEmpty from './layouts/LayoutEmpty.vue';

// LayoutEmpty

import PageHome from './pages/PageHome.vue';

// LayoutDefault
import PageCatalog from './pages/PageCatalog.vue';
import PageContact from './pages/PageContact.vue';
import PageAboutCompany from './pages/PageAboutCompany.vue';
import PageCooperation from './pages/PageCooperation.vue';
import PageDeliveryManagement from './pages/PageContact.vue';
import PageDesign from './pages/PageContact.vue';
import PageObjectWebsite from './pages/PageObjectWebsite.vue';
import PagePrivateOffice from './pages/PagePrivateOffice.vue';
import PageRepair from './pages/PageRepair.vue';
import PageReviews from './pages/PageReviews.vue';
import PageTestInputConpoment from './pages/PageTestInputConpoment.vue';
import PageVacancies from './pages/PageVacancies.vue';
import PageWithoutAgent from './pages/PageWithoutAgent.vue';



export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: LayoutEmpty,
      children: [
        { path: '/', component: PageHome},
        
      ],
    },
    {
      path: '/',
      component: LayoutDefault,
      children: [
        { path: '/PageAboutCompany', component: PageAboutCompany},
        { path: '/PageCatalog', component: PageCatalog},
        { path: '/PageContact', component: PageContact},
        { path: '/PageCooperation', component: PageCooperation},
        { path: '/PageDeliveryManagement', component: PageDeliveryManagement},
        { path: '/PageDesign', component: PageDesign},
        { path: '/PageObjectWebsite', component: PageObjectWebsite},
        { path: '/PagePrivateOffice', component: PagePrivateOffice},
        { path: '/PageRepair', component: PageRepair},
        { path: '/PageReviews', component: PageReviews},
        { path: '/PageTestInputConpoment', component: PageTestInputConpoment},
        { path: '/PageVacancies', component: PageVacancies},
        { path: '/PageWithoutAgent', component: PageWithoutAgent},

      ],
    },
  ],
})


