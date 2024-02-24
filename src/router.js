import { createRouter, createWebHistory } from 'vue-router'
// import UserTest from './views/UserTest.vue'
// import UserHome from './views/UserHome.vue'
import UserProfile from './views/UserProfile.vue'
import UserPosts from './views/UserPosts.vue'
// import AppMainComponent from './components/AppMainComponent.vue'

import AppAboutCompany from './components/AppAboutCompany.vue'
import AppObjectWebsite from './components/AppObjectWebsite.vue'
import AppContact from './components/AppContact.vue'
import AppVacancies from './components/AppVacancies.vue'
import AppCooperation from './components/AppCooperation.vue'
import AppRepair from './components/AppRepair.vue'
import AppDesign from './components/AppDesign.vue'

import AppWithoutAgentPage from './components/AppWithoutAgentPage.vue'
import AppDeliveryManagementPage from './components/AppDeliveryManagementPage.vue'
import AppReviewsPage from './components/AppReviewsPage.vue'
import AppCatalogPage from './components/AppCatalogPage.vue'
import AppTestInputConpoment from './components/AppTestInputConpoment'
import AppPrivateOfficePage from './components/AppPrivateOfficePage'


import AppMainComponent from './components/AppMainComponent'

import AppHomePage from './components/AppHomePage'



export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/users/:username',
      // component: AppMainComponent,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /users/:username is matched
        { path: '/', component: AppMainComponent },

        // UserProfile will be rendered inside User's <router-view>
        // when /users/:username/profile is matched
        { path: 'profile', component: UserProfile },

        // UserPosts will be rendered inside User's <router-view>
        // when /users/:username/posts is matched
        { path: 'post', component: UserPosts },

        // { path: 'AppObjectWebsite', component: AppObjectWebsite },

        { path: 'AppAboutCompany', component: AppAboutCompany },

        // TODO пока не исспользую 
        { path: 'AppObjectWebsite', component: AppObjectWebsite },

        { path: 'AppContact', component: AppContact },
        { path: 'AppVacancies', component: AppVacancies },
        { path: 'AppCooperation', component: AppCooperation },

        // TODO пока 1 ссылка делиться на 2 страници по дизайну и ремонту
        { path: 'AppRepair', component: AppRepair },

        { path: 'AppDesign', component: AppDesign },


        { path: 'AppWithoutAgentPage', component: AppWithoutAgentPage },
        { path: 'AppDeliveryManagementPage', component: AppDeliveryManagementPage },
        { path: 'AppReviewsPage', component: AppReviewsPage },

        // TODO пока не исспользую 
        { path: 'AppCatalogPage', component: AppCatalogPage },

        { path: 'AppTestInputConpoment', component: AppTestInputConpoment },

        { path: 'AppHomePage', component: AppHomePage },

        { path: 'AppPrivateOfficePage', component: AppPrivateOfficePage },

        {
          path: "AppPrivateOfficePage1",
          components: {
            home: AppPrivateOfficePage
          },
        },

        {
          path: "AppMainComponent",
          components: {
            main: AppMainComponent
          },
        }
      ],
      
    },
  ],
})
