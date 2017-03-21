<template>
    <div class="home__container">
        <div class="article-list">
            <navInfo></navInfo>
            <ul class="tag_container">
                <TagList v-for="(tagArticle,index) in allTags" :key="index" :tagArticle="tagArticle"></TagList>
            </ul>
            <ul class="animated article-list-container" :class="animatedObj" ref="animated_ul" >
                <ArticleList  v-for="(article,index) in allArticle"  :key="index" :article="article"></ArticleList>
            </ul>
            <div class="home__bottom-changePage">
                <div class="home__bottom-arrow left">
                    <i class="anticon icon icon-left"></i>
                </div>
                <div class="home__bottom-arrow right">
                    <i class="anticon icon icon-right"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TagList from './Front-end-home/TagList'
    import ArticleList from './Front-end-home/ArticleList'
    import navInfo from './Front-end-nav'
    import {mapGetters,mapMutations} from 'vuex';
    export default {
        computed:{
            ...mapGetters([
                'allTags',
                'allArticle',
        // ...
            ])
        },
        data(){
            return {
                animatedObj:{
                    bounceInRight:false
                }
            }
        },
        mounted(){
        },
        updated(){ 
            this.animatedObj={
                bounceInRight:true
            };
            this.$refs.animated_ul.classList.add("bounceInRight");
            setTimeout(()=>{
                this.$refs.animated_ul.classList.remove("bounceInRight")
            },800)
        },
        components:{
            TagList,
            ArticleList,
            navInfo
        },
        created(){
            this.$store.dispatch('getCategoryList')
                .then(()=>{ 
                    setTimeout(()=>{
                    this.$store.dispatch('getArticleListByCate')
                    },200)
                })
        }
    }
</script>
<style lang="scss">
.home__container{
        margin-left:200px;
        width:100%;
        height:100%;
        background-color: #fafafa;
        overflow-y:auto;
        padding-left:5rem;
}
.article-list{
    width:100%;
    height:100%;
    position:relative;
}
    .tag_container{
        display:flex;
        margin-top:100px;
        border-bottom:1px solid #d9d9d9;
        padding-bottom:12px;
    }
    .article-list-container{
        position:absolute;
        top:55px;
        display:flex;
        flex-wrap:wrap;
        padding-bottom:40px;
        padding-right:160px;
        min-height:735px;
    }

    .home__bottom-changePage{
        position:absolute;
        top:740px;
        right:3rem;
        display:flex;
        .home__bottom-arrow {
           width: 28px;
           height: 28px;
           border: 1px solid #f1f1f1;
           line-height: 28px;
           text-align: center;
           padding: 0 2px;
           cursor:pointer;
           color:#97a8be;
           &.right {
               margin-left:1.2rem;
           }
        }
        
    }
</style>