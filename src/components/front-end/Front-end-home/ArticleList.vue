<template>
    <li class="article-wrapper">
        <router-link :to="{path:`/home/${article._id}`,query:{id:article._id}}" class="article_link_url">
            <div class="article-img">
                <div class="article-img-front">
                    <img :src="article.imgUrl" alt="">
                </div>
            </div>
            <div class="article-title">
                <h3>{{article.title}}</h3>
                <!--<span>{{article.date}}</span>-->
            </div>
            <div class="article-content" v-html="article.content">
            </div>
        </router-link>
    </li>
</template>
<script>
    import {mapGetters,mapMutations} from 'vuex';
    export default{
        name:"articleList",
        props:['article'],
        /*data(){
            active_bounceInLeft:{
                bounceInLeft:false
            }
        }*/
    }
</script>
<style lang="">

    .article-wrapper{
        width:230px;
        height:245px;
        margin:0 20px 8px 0;
    }
    .article-wrapper>.article_link_url:hover .article-content>p {
        color:#000;
    }
    .article-img {
        width:100%;
        overflow:hidden;
    }
    .article-img-front{
        height:180px;
    }
    .article-img-front>img {
        max-width:100%;
        border-radius:4px;
    }
    .article-title{

    }
    .article-title>h3{
        margin:0;
        color:#000;
        font-size:.9rem;
        font-weight:normal;
        margin-left:8px;
        margin-top:6px;
    }
    .article-title>span {
        color:#000;
        font-size:.8rem;
    }
    .article-content{
        color:#9e9e93;
        font-size:.8rem;
        margin:6px 0 8px 6px;
        height: 29px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    }
</style>