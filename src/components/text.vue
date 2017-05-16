<template>
  <div class="text-input">
    <textarea cols="93" rows="3" placeholder="说点什么" v-model="textContent" @keyup.enter="sendMsg"></textarea>
    <input type="button" class="btn" value="发送"  @click="sendMsg"/>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        'textContent': ''
      }
    },  
    methods: {
      sendMsg (){
        let len = this.textContent.replace(/(^\s*)|(\s*$)/g, "").length;
        if(len){
          this.$store.dispatch('sendMsg',{
            textContent: this.textContent,
            currentId: this.$store.state.isCurrentId
          });
          this.textContent = '';
        }else{
          alert('不能发送空内容哦～');
        }
      }
    }
  }
</script>
<style>
  .text-input{
    border-top:1px solid #ddd;
    padding: 10px;
    text-align: right;
    height:90px;
  }
  .text-input textarea{
    border:none;
    resize:none;
  }
  .text-input .btn{
    padding:6px 12px;
    border: 1px solid #fa5943;
    background: #fa5943;
    vertical-align: middle;
    text-decoration: none;
    color:#fff;
  }
</style>