import Portal from '@/components/front-end/Portal'
import Home from '@/components/front-end/Front-end-home'
import ArticleDetail from '@/components/front-end/Front-end-ArticleDetail'
const routes =[
    {
        path:'/',
        component:Portal,
        hidden:true,
        children:[
            //{path:'home',component:Home,meta:{auth:false}}
            /*{path:'',rdirect:"home",meta:{auth:false}},
            {path:'home',component:Home,meta:{auth:false}},
            {path:'tags',component:Tags,meta:{auth:false}},*/
        ]
    },
    {
        path:'/home',
        component:Home,
        hidden:true,
        /*children:[
            {path:'/:id',component:ArticleDetail,meta:{auth:false}}
        ]*/
    },
    { path: "/home/:id", component: ArticleDetail,
        children:[
            {path:'',component:ArticleDetail,meta:{auth:false}}
        ]
    }
];
export default routes;