import Loading from './components/Loading.vue'
import Home from './components/Home.vue'
const routes = [
    {
        path: '/',
        component: Loading
    },
    {
        path: '/home',
        component: Home
    }
]
export default routes