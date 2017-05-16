import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import content from './modules/content';

Vue.use(Vuex);
const now = new Date();
const store = new Vuex.Store({
  state: {
    user: {
      name: 'YTTJamie',
      img:'../static/images/3.jpg'
    },
    session: [
      {
        id: 1,
        user: {
          name: 'Lucy',
          img: '../static/images/1.jpg'
        },
        message: [
          {
            content: '你们已经成为好友，现在可以开始聊天了哦～',
            date: now,
            sender:1
          },
          {
            content: '你好～',
            date: now,
            sender:0
          }
        ]
      },
      {
        id: 2,
        user: {
          name: 'Join',
          img: '../static/images/2.jpg'
        },
        message: [
          {
            content: '你们已经成为好友，现在可以开始聊天了哦～',
            date: now,
            sender:1
          }
        ]
      }
    ],
    isCurrentId:1
  },
  getters:{
    state: (state) => this.state
  },
  modules: {
    content
  },
  actions
})

export default store;