import * as types from '../mutation-types';
let state = {
  messageList : [],
  isCurrent: false
}
const actions = {
  initData ({commit,rootState},msg) {
    commit(types.INIT_DATA,{rootState,msg});
  },
  selectContacts ({commit,rootState},data){
    commit(types.SELECT_CONTACTS,{rootState,data})
  },
  sendMsg ({commit,rootState},data){
    commit(types.SEND_MSG,{rootState,data})
  }
}
const mutations = {
  [types.INIT_DATA] (state,{rootState,msg}){
    rootState.session = msg.msgData;
    msg.callback();
  },
  [types.SELECT_CONTACTS] (state,{rootState,data}) {
    state.messageList = [];
    rootState.session.forEach(v=>{
      if(v.id === data.id){
        v.isCurrent = true;
        rootState.isCurrentId = v.id;
      }else{
        v.isCurrent = false;
      }
      return v;
    });
    state.messageList = rootState.session;
  },
  [types.SEND_MSG] (state,{rootState,data}){
    rootState.session.forEach(v=>{
      if(v.id === data.currentId){
        let msg = {
          content: data.textContent,
          date: new Date(),
          sender:0
        }
        v.message.push(msg);
      }
    });
    state.messageList = rootState.session;
    localStorage.setItem('messageData',JSON.stringify(rootState.session));
  }
} 

export default {
  state,
  actions,
  mutations
}