
<template>
  <div class="contain clearfix">
    <user-card></user-card>
    <div class="contact-lists">
      <contact-lists></contact-lists>
    </div>
    <div class="chat-content">
      <message></message>
      <message-text></message-text>
    </div>
  </div>
</template>
<script>
  import userCard from "./components/user-card";
  import contactLists from "./components/contact-lists";
  import message from "./components/message";
  import messageText from "./components/text";

  export default {
    components: {userCard, contactLists, message, messageText}
  }
</script>
<style>
  ul,li,p{
    padding:0;
    margin:0;
    list-style:none;
  }
  .clearfix {
    *zoom: 1;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    line-height: 0;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }
  .contain{
    width:850px;
    margin:100px auto;
    height: 600px;
    background: #fff;

  }
  .contain .contact-lists{
    float:left;
    width: 240px;
    height: 100%;
  }
  .contain .chat-content{
    float:right;
    width: 609px;
    border-left:1px solid #ddd;
  }
</style>
