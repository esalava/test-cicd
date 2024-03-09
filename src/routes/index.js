import UserStudies from "@/views/studies/UserStudies.vue";
import UserDescription from "@/views/description/UserDescription.vue";
import UserHobbies from "@/views/hobbies/UserHobbies.vue";
import UserProjects from "@/views/projects/UserProjects.vue";
import UserExperience from "@/views/experience/UserExperience.vue";
import * as VueRouter from 'vue-router'

const routes = [
    {
        path: "/experience",
        name: "UserExperience",
        component: UserExperience
    },
    {
        path: "/studies",
        name: "UserStudies",
        component: UserStudies
    },
    {
        path: "/hobbies",
        name: "UserHobbies",
        component: UserHobbies
    },
    {
        path: "/projects",
        name: "UserProjects",
        component: UserProjects
    },
    {
        path: "/",
        name: "UserDescription",
        component: UserDescription
    }
];

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})
