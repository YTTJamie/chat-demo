<template>
  <div class="msg-list" v-scroll="messageList">
    <div v-for="listItem in messageList" v-if="listItem.isCurrent">
      <div class="header" ref="header">
        <p>{{listItem.user.name}}</p>
      </div>
      <ul class="msgList" ref="msglist">
        <li v-for="msgItem in listItem.message" v-if="msgItem.content" :class="[{'receive':msgItem.sender === 1, 'own':msgItem.sender === 0},'clearfix']">
          <p class="time"><span>{{new Date(msgItem.date).toLocaleString()}}</span></p>
          <div class="msg">
            <div class="img"><img :src="listItem.user.img"/></div>
            <div class="content"><p>{{msgItem.content}}</p></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  import $ from 'jquery';
  export default{
    computed: {
      messageList () {
        return this.$store.state.content.messageList;
      },
      isCurrent (){
        return this.$store.state.isCurrent;
      },
      isCurrentId (){
        return this.$store.state.isCurrentId;
      }
    },
    directives: {
      scroll (el,state,data){
        data.context.$nextTick(function () {
          $(el).scrollTop(el.scrollHeight);
        });
      }
    }
  }
</script>
<style scoped>
  .msg-list{
    padding: 10px;
    height:480px;
    overflow-y:auto;
  }
  .header{
    padding:4px;
  }
  header p{
    font-size: 14px;
  }
  ul.msgList li{
    padding-bottom:20px;
  }
  li .time{
    padding:10px 0 20px;
    text-align:center;
  }
  li .time span{
    padding:2px 6px;
    font-size:12px;
    color:#999;
    background:rgba(238,238,238,0.6);
    border-radius:2px;
  }
  li .msg .img{
    padding:4px;
  }
  li .msg .img img{
    width:36px;
    height:36px;
    border-radius: 50%;
    vertical-align:middle;
  }
  li .msg .content{
    position:relative;
    font-size:14px;
  }
  li.receive .msg .img{
    float:left;
  }
  li.receive .msg .content{
    margin-left:60px;
  }
  li.own .msg .img{
    float:right;
  }
  li.own .msg .content{
    margin-right:60px;
  }
  li .msg .content:before{
    content:'';
    width:0;
    height:0;
    border-width:8px;
    border-style: solid;
    position:absolute;
    top:12px;
  }
  li.receive .msg .content:before{
    left:-16px;
    border-color:transparent #81d8f5 transparent transparent;
  }
  li.own .msg .content:before{
    right:-16px;
    border-color:transparent transparent transparent #ffad38;
  }
  li .msg .content p{
    padding:10px;
    border-radius:5px;
  }
  li.receive .msg .content p{
    float:left;
    background: #81d8f5;
  }
  li.own .msg .content p{
    float:right;
    background: #ffad38;
    color:#fff;
  }
</style>