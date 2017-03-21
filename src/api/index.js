//所需的Api


// 获取所有的标签
//getAarticleTagList

// 根据标签获取文章列表
//getAarticleListByTagId


//根据当前文章，获取文章详情

//getDetailListByArticleId

import _ from 'lodash';
import 'whatwg-fetch'
import { checkStatus, parseJSON, getPostParams } from '@/utils'
import clientConfig from './config-client'

const _articleList = [{
        img_url: "../assest/img/bg1.jpg",
        title: "html基本语法",
        content: "<p>超文本标记语言，标准通用标记语言下的一个应用。" +
            "“超文本”就是指页面内可以包含图片、链接，甚至音乐、程序等非文字元素。" +
            "超文本标记语言的结构包括“头”部分（英语：Head）、和“主体”部分（英语：Body），其中“头”部提供关于网页的信息，“主体”部分提供网页的具体内容。" +
            "</p>",
        date: new Date().toDateString(),
        type_id: 100
    },
    {
        img_url: "/../img/bg2.jpg",
        title: "H5新标签详解",
        content: "<p>超文本标记语言，标准通用标记语言下的一个应用。" +
            "“超文本”就是指页面内可以包含图片、链接，甚至音乐、程序等非文字元素。" +
            "超文本标记语言的结构包括“头”部分（英语：Head）、和“主体”部分（英语：Body），其中“头”部提供关于网页的信息，“主体”部分提供网页的具体内容。" +
            "</p>",
        date: new Date().toDateString(),
        type_id: 100
    },
    {
        title: "css基础语法",
        content: "css基础...",
        date: new Date().toLocaleString(),
        type_id: 200
    },
    {
        title: "js原型",
        content: "js基础...",
        date: new Date().toLocaleString(),
        type_id: 300
    },
    {
        title: "react的生命周期",
        content: "react基础...",
        date: new Date().toLocaleString(),
        type_id: 400
    },
    {

        title: "nodejs的express框架",
        content: "nodejs基础...",
        date: new Date().toLocaleString(),
        type_id: 500
    }
]

const _AarticleTagList = [{
        type_id: 100,
        article_type: "web开发"
    },
    {
        type_id: 200,
        article_type: "Nodejs开发"
    },
    {
        type_id: 300,
        article_type: "代码设计规范"
    },
    {
        type_id: 400,
        article_type: "Hybrid开发"
    },
    {
        type_id: 500,
        article_type: "web资源推荐"
    }
];

///frontend/article/list
//http://localhost:8888/api/frontend/article/list
export default {
    getCategoryList() {
        return new Promise((resolve,reject) => {
            fetch(`${clientConfig.api}frontend/category/list`)
              .then(checkStatus)
              .then(parseJSON)
              .then(result => {
                console.log(result)
                resolve(result)
            }).catch(err => {
                reject(err)
                console.log(err)
            })
        })
    },
    getArticleListByCate(url) {
        return new Promise((resolve,reject) => {
            fetch(url)
              .then(checkStatus)
              .then(parseJSON)
              .then(result => {
                console.log(result)
                resolve(result)
            }).catch(err => {
                reject(err)
                console.log(err)
            })
        })
    },
    getArticleDetail(url) {
        return new Promise((resolve,reject) => {
            fetch(url)
              .then(checkStatus)
              .then(parseJSON)
              .then(result => {
                console.log(result)
                resolve(result)
            }).catch(err => {
                reject(err)
                console.log(err)
            })
        })
    }

}