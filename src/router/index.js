import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Committee from "../components/Committe";
import CallForPapers from "../components/CallForPapers";
import Speakers from "../components/Secciones/Speakers/Speakers";
import ComingSoon from "../components/ComingSoon";

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/Committee',
        name: 'Committee',
        component: Committee
    },
    {
        path: '/CallForPapers',
        name: 'CallForPapers',
        component: CallForPapers
    },
    {
        path: '/KeynoteSpeakers',
        name: 'KeynoteSpeakers',
        component: Speakers
    },
    {
        path: '/Program',
        name: 'Program',
        component: ComingSoon
    },
    {
        path: '/Accomodation',
        name: 'Accomodation',
        component: ComingSoon
    },
]

const router = new VueRouter({
    // mode: 'history',
    routes
})

export default router