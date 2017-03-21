import api from '@/api'
import * as types from '../mutation_type'
//init state

const state = {
  allCategory: [],
  category_errMsg: '',
  category_status: false,
  category_item: []
}

const getters = {
  allCategory: state => state.allCategory,
  category_status: state => state.category_status
}

const actions = {
  getCategoryList ({commit, state}) {
    api.getCategoryList()
      .then(result => { 
        const {list} = result.data
        commit(types.RECEIVE_CATEGORY, {list})
      }).catch(error => {
        commit(types.FAIL_CATEGORY, {errMsg: error.toString()})
      })
  },
  addCategoryByBackEnd ({commit, state}, category) {
    api.addCategory(category)
      .then(data => {
        if (data.code === 200) {
          console.log('success')
          commit(types.ADD_CATEGORY, {category})
        } else {
          commit(types.FAIL_CATEGORY, {errMsg: data.message})
        }
      }).catch(err => {
        commit(types.FAIL_CATEGORY, {errMsg: err.toString()})
      })
  },
  modifyCategoryItem ({commit, state}, categoryItem) {
    api.updateCategoryItem(categoryItem)
      .then(data => {
        if (data.code === 200) {
          commit(types.SUCCESS)
        } else {
          commit(types.FAIL_CATEGORY, {errMsg: data.message})
        }
      }).catch(err => {
        commit(types.FAIL_CATEGORY, {errMsg: err.toString()})
      })
  },
  getCategoryItem ({commit, state}, id) {
    api.getCategoryItem(id)
      .then(item => {
        if (item.code === 200) {
          commit(types.RECEIVE_CATEGORY_ITEM, {item})
        } else {
          commit(types.FAIL_CATEGORY, {errMsg: item.message})
        }
      }).catch(err => {
        commit(types.FAIL_CATEGORY, {errMsg: err})
      })
  }
}

const mutations = {
  [types.RECEIVE_CATEGORY] (state, {list}) {
    state.allCategory = list
  },
  [types.FAIL_CATEGORY] (state, {errMeg}) {
    state.category_status = false
    state.category_errMsg = errMeg
  },
  [types.ADD_CATEGORY] (state, {category}) {
    state.allCategory.push(category)
    state.category_status = true
  },
  [types.SUCCESS] (state) {
    state.category_status = true
  },
  [types.RECEIVE_CATEGORY_ITEM] (state, {item}) {
    state.category_item = item
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
