<template>
        <li class="tag_list_current">
            <a href="#" @click.prevent="changeHangler(tagArticle._id)" :class="active_btn">{{tagArticle.cate_name}}</a>
        </li>
</template>

<script>
    import {mapGetters,mapMutations} from 'vuex';
    import _ from 'lodash'
    export default {
        name:"tagList",
        props:["tagArticle"],
        computed:{
            active_btn(){
                const {all,selectedIdx} = this.$store.state.home;
                return {
                    btn_active:this.isActive()
                }
            }
        },
        data(){
            return {
            seleted_id:"",
            }
        },
        methods:{
            isActive(){
                console.log(this.$store.state)
                const {all,selectedIdx} = this.$store.state.home;
                return all[selectedIdx]._id==this.tagArticle._id
            },
            changeHangler(type_id){ 
                const {all} = this.$store.state.home;
                const idx=_.findIndex(all,item=>item._id==type_id);
                if(idx>-1){
                    this.$store.commit('CHANGE_TAG',{idx});
                    this.$store.dispatch('getArticleListByCate');
                }
            }
        },
    }

</script>
<style lang="">
    .tag_list_current{
        margin-right:10px;
    }
    .tag_list_current:last-child{
        margin-right:0;
    }
    .tag_list_current>a{
    color: rgb(102,102,102);
    font-size: .9rem;
    padding:0 20px 11px 20px;
    }
    .tag_list_current:first-child>a{
        padding-left:0;
    }
    .tag_list_current>a:hover{
        color:#000;
    }
    .tag_list_current>a.btn_active{
        color:#000;
        border-bottom:2px solid #2db7f5;
    }
</style>