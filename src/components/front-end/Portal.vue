<template>
    <section class="home-wrapper">
        <video loop muted autoplay poster="http://ui.specbee.com/sample/videoframe.jpg" class="home-wrapper__video">
            <source src="http://ui.specbee.com/sample/bird.mp4" type="video/mp4"> 
    <!-- add .ogv and .webm to cover all compatible devices  -->
        </video>
        <div class="protal__wrapper-content animated" ref="protal__wrapper-content">
            <h1>每天一点点，进步多一点</h1>
            <p>一个人最大的幸福 ，莫过于他喜欢的事物赐予的快乐！</p>
            <div class="wrapper-btn">
                <router-link to="/home" class="learnMore-btn">进入主页</router-link>
                <button @click="open()" class="watch-btn">github地址</button>
            </div>
        </div>
    </section>
</template>
<script>
    export default{
        methods:{
            open(){
                window.open('https://github.com/XcXerxes');
            }
        },
        mounted() { 
            const ele = this.$refs["protal__wrapper-content"]
            ele.classList.add('bounceInDown')
            setTimeout(() => {
                ele.classList.remove('bounceInDown')
            },800)
        }
    }
</script>
<style lang="scss">
    .home-wrapper {
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        /*background-color:rgba(220,220,220,.6);
        background: url('/public/img/cover_bg_1.jpg') no-repeat;*/
        background-size:cover;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow:hidden;
        >.protal__wrapper-content {
          margin-bottom:9rem;
          z-index:10;
        }
        h1 {
          font-size: 2.3rem;
          letter-spacing: .3em;
          color: #fff;
          text-align:center;
          text-transform: uppercase;
        }
        p {
          text-align: center;
          font-size: 1.4rem;
          color: #fff;
          margin:3rem 0;
          letter-spacing:.2rem;  
        }
    }
    .home-wrapper__video{
        position:absolute;
        left:0;
        top:0;
        min-width:100%;
        min-height:100%;
    }
    .home-wrapper:before{
        content:"";
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        background:rgba(0,0,0,.3);
        z-index:2;
    }
   /* .home-wrapper h1 {
        
    }
    
    .home-wrapper p {
        text-align: center;
        font-size: 1.4rem;
        color: #fff;
        margin:3rem 0;
        letter-spacing:.2rem;
    }*/
    .wrapper-btn {
        text-align:center;
        >.watch-btn {
            border: none;
            padding: 1rem 3.5rem;
            border-radius: 24px;
            color: #fff;
            font-size: 1rem;
            line-height: 1;
            cursor:pointer;
            font-family:"Microsoft YaHei";
            outline:none;
            background:rgba(0, 0, 0, 0.4);
            &:hover {
                background:rgba(0, 0, 0, 0.9);
            }
        }
        .learnMore-btn{
            padding:.8rem 4rem;
            color: #fff;
            font-family:"Microsoft YaHei";
            border-radius: 24px;
            background:rgba(239, 98, 73, 0.7);
            margin-right: 2.5rem;
            &:hover {
                 background:rgba(239, 98, 73, 0.9);
            }
        }
    }
    /*.wrapper-btn>.watch-btn
     {
       
    }
    .wrapper-btn .watch-btn:hover {
        background:rgba(0, 0, 0, 0.9);
    }
    .wrapper-btn .learnMore-btn{
        padding:.8rem 4rem;
        color: #fff;
        font-family:"Microsoft YaHei";
        border-radius: 24px;
        background:rgba(239, 98, 73, 0.7);
        margin-right: 2.5rem;
    }
    .wrapper-btn .learnMore-btn:hover{
        background:rgba(239, 98, 73, 0.9);
    }*/

</style>