<template>
  <div class="articleDetail-container">
    <div class="markdown-body animated" ref="markdownBody" v-html="articleDetail.html">
      
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {

    computed:{
      ...mapGetters([
        'articleDetail'
      ])
    },
      created(){ 
        this.$store.dispatch('getArticleDetail',this.$route.query.id)
      },
      updated(){
        this.$refs.markdownBody.classList.add("bounceInRight");
            setTimeout(()=>{
                this.$refs.markdownBody.classList.remove("bounceInRight")
          },800)
      }
  }
</script>

<style>
  .articleDetail-container{
    width:100%;
    height:100%;
    overflow-x:auto;
  }
  .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        padding: 45px;
    }
</style>