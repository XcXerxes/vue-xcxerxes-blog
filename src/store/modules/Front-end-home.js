import api from '@/api'
import * as types from '../mutation-types'
import _ from 'lodash'
import clientConfig from '@/api/config-client'

//init state 

const state = {
    all: [],
    selectedIdx: 0,
    list: [],
    articleDetail:{},
    status_receive: false
}
let oldType_id = '';
//getters

const getters = {
    allTags: state => state.all,
    allArticle: state => state.list,
    status_receive: state => state.status_receive,
    articleDetail: state => state.articleDetail
}

const actions = {
    getCategoryList({ commit }) {
        api.getCategoryList()
            .then(data => {
                if(data.code ===200){
                    const {list} = data.data
                    commit(types.TAGLIST_RECEIVE, { tagList:list });
                }
            })
    },
    getArticleListByCate({ commit, state }) {
        //commit(types.ARTICLE_REQUEST);
        console.log(state)
        const type_id = state.all[state.selectedIdx]["_id"];
        console.log(type_id)
            api.getArticleListByCate(`${clientConfig.api}frontend/article/list?id=${type_id}`)
                .then(data => {
                    if (data.code === 200) {
                        const articleList = data.data.list
                        commit(types.ARTICLE_RECEIVE, { articleList });
                        //oldType_id = type_id;
                    }
                }).catch(error => {
                    console.log(error)
                    commit(types.ARTICLE_FAILURE)
                })
        /*if (oldType_id != type_id) {
        }*/
    },
    getArticleDetail({commit,state},id){
        api.getArticleDetail(`${clientConfig.api}frontend/article/item?id=${id}`)
          .then(data => {
              if (data.code === 200) {
                  const detail = data.data
                  commit(types.ARTICLE_DETAILE_RECEIVE,{detail})
              }
          })
    }
};

const mutations = {
    [types.TAGLIST_RECEIVE](state, { tagList }) {
        state.all = tagList;
    },
    [types.CHANGE_TAG](state, { idx }) {
        state.selectedIdx = idx;
    },
    [types.ARTICLE_REQUEST](state) {
        state.list = [];
        state.status_receive = false;
    },
    [types.ARTICLE_RECEIVE](state, { articleList }) {
        state.list = articleList;
        state.status_receive = true;
    },
    [types.ARTICLE_FAILURE](state) {
        console.warn('fail');
    },
    [types.ARTICLE_DETAILE_RECEIVE](state, {detail}) {
        state.articleDetail = detail
    }
};
export default {
    state,
    mutations,
    getters,
    actions
}