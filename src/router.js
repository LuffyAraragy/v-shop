import { createRouter, createWebHistory } from 'vue-router'
// import UserTest from './views/UserTest.vue'
import UserHome from './views/UserHome.vue'
import UserProfile from './views/UserProfile.vue'
import UserPosts from './views/UserPosts.vue'
// import AppMainComponent from './components/AppMainComponent.vue'
// import AppObjectWebsite from './components/AppObjectWebsite.vue'

import AppAboutCompany from './components/AppAboutCompany.vue'
import AppObjectWebsite from './components/AppObjectWebsite.vue'
import AppContact from './components/AppContact.vue'
import AppVacancies from './components/AppVacancies.vue'
import AppCooperation from './components/AppCooperation.vue'
import AppRepair from './components/AppRepair.vue'
import AppWithoutAgentPage from './components/AppWithoutAgentPage.vue'
import AppDeliveryManagementPage from './components/AppDeliveryManagementPage.vue'


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/users/:username',
      // component: AppMainComponent,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /users/:username is matched
        { path: '', component: UserHome },

        // UserProfile will be rendered inside User's <router-view>
        // when /users/:username/profile is matched
        { path: 'profile', component: UserProfile },

        // UserPosts will be rendered inside User's <router-view>
        // when /users/:username/posts is matched
        { path: 'post', component: UserPosts },


        
        // { path: 'AppObjectWebsite', component: AppObjectWebsite },

        { path: 'AppAboutCompany', component: AppAboutCompany },
        { path: 'AppObjectWebsite', component: AppObjectWebsite },
        { path: 'AppContact', component: AppContact },
        { path: 'AppVacancies', component: AppVacancies },
        { path: 'AppCooperation', component: AppCooperation },
        { path: 'AppRepair', component: AppRepair },
        { path: 'AppWithoutAgentPage', component: AppWithoutAgentPage },
        { path: 'AppDeliveryManagementPage', component: AppDeliveryManagementPage },

      ],
    },
  ],
})
