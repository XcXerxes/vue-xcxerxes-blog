<template>
    <nav class="xc-nav animated bounceInLeft">
        <div class="xc-nav-wrapper">
            <div class="xc-nav-search">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input type="text" placeholder="搜索"/>
            </div>
            <ul class="xc-nav-link">
                <li v-for="navInfo in navList">
                    <a @click.prevent="changeRouter(navInfo.link)" active-class="active">{{navInfo.title}}</a>
                </li>
            </ul>
            <div class="xc__nav-scanCode">
                
            </div>
            <aside class="xc_nav_links">
                <h3>LINK</h3>
                <ul class="xc_links_without">
                    <li v-for="withoutLink in withoutLinks">
                        <router-link :to="withoutLink.url">{{withoutLink.urlTitle}}</router-link>
                    </li>
                </ul>
            </aside>
        </div>
    </nav>
</template>
<script>
    export default{
        name:"nav",
        data(){
            return{
                navList:[
                    {link:"/home",title:"HOME"},
                    {link:"/user",title:"WORKS"},
                    {link:"/about",title:"ABOUT"}
                ],
                withoutLinks:[
                    {url:"",urlTitle:"Tencent CDC"},
                    {url:"",urlTitle:"Tencent ISUX"},
                    {url:"",urlTitle:"京东设计中心"},
                    {url:"",urlTitle:"凹凸实验室"},
                    {url:"",urlTitle:"Tencent MXD"},
                    {url:"",urlTitle:"Tencent AlloyTeam"},
                    {url:"",urlTitle:"淘宝UED"},
                    {url:"",urlTitle:"百度FEX"},
                    {url:"",urlTitle:"携程UED"},
                    {url:"",urlTitle:"百度前端 EFE"}
                ]
            }
        },
        methods:{
            changeRouter(link){ debugger
                this.$router.push(link);
                window.location.reload();
            }
        }
    }
</script>
<style lang="">
    ul,li{
        margin:0;
        padding:0;
        list-style:none;
    }
    nav.xc-nav{
        position:fixed;
        width:145px;
        padding:90px 0 0 60px;
        top:0;
        left:0;
        bottom:0;
        background-color:#161616;
    }
    .xc__nav-scanCode{
        width: 100%;
        height: 100%;
        margin-top: 17rem;
        background:url('../../assets/img/scancode.jpg') no-repeat;
    }
    .xc-nav-wrapper{
        position:relative;
        height:100%;
        /*max-width:960px;
        width:960px;
        line-height:1;
        margin:0 auto;
        display:flex;
        display:flex;*/

    }
    .xc-nav-search{
        display: flex;
        position: relative;
        align-items: center;
        cursor:pointer;
    }
    .xc-nav-search>i {
        position:absolute;
        color:#888;
    }
    .xc-nav-search>i:hover{
        color:#fff;
    }
    .xc-nav-search>input {
        outline:none;
        border:none;
        padding:8px 0 7px 28px;
        background: none;
        width:25px;
        transition:all .4s ease;
        border-bottom:1px solid transparent;
    }
    .xc-nav-search>input:focus{
        border-bottom:1px solid #464545;
        width:90px;
    }
    .xc-nav-search>input::-webkit-input-placeholder{
        font-size:.8rem;
        font-family:"PingFang SC","Lantinghei SC","Microsoft YaHei";
    }
    .xc-nav-link{
       /* display:flex;
        line-height:50px;
        flex:3;*/
        padding-top:10px;
    }
    .xc-nav-link a{
        color:#777;
        font-size:.8rem;
        line-height:35px;
        text-shadow: 0 1px rgba(0,0,0,0.2);
    }
    .xc-nav-link a:hover{
        color:#fff;
    }
    .active{
        color:#f00;
    }
    .xc_nav_links{
        padding:20px 0 15px 0;
        position:absolute;
        bottom:10px;

    }
    .xc_nav_links>h3{
        font-weight:normal;
        color:#ffffff;
    }
    .xc_links_without>li{
        line-height:1.5;
    }
    .xc_links_without>li>a {
        color:#777;
        font-size:.72rem;
    }
    .xc_links_without>li>a:hover{
        color:#fff;
    }
</style>