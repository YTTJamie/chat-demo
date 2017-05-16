<script>
  export default {
    mounted (){
      let messageData = localStorage.getItem('messageData'),
        that = this;
      if(messageData){
        that.$store.dispatch('initData',{
          msgData:JSON.parse(messageData),
          callback:function(){
            that.$refs.listItem[0].click();
          }
        });
      }else{
        that.$refs.listItem[0].click();
      }
    },
    computed:{
      session (){
        return this.$store.state.session;
      },
      isCurrentId (){
        return this.$store.state.isCurrentId;
      }
    },
    methods: {
      selectContacts (item) {
        this.$store.dispatch('selectContacts',item);
      } 
    }
  }
</script>
<template>
  <ul class="list">
    <li v-for="(item,index) in session" :class="isCurrentId == item.id? 'active' : ''" @click="selectContacts(item)" ref="listItem">
      <img :src="item.user.img"/>
      <div class="info">
        <p class="name">{{item.user.name}}</p>
        <p class="last-msg">
          {{item.message[item.message.length-1].content}}
        </p>
      </div>
    </li>
  </ul>
</template>

<style>
  ul.list li{
    padding: 10px 14px;
    height: 50px;
  }
  ul.list li p{
    padding:4px 0 0 14px;
    text-overflow: ellipsis;
    white-space:nowrap;
    overflow:hidden; 
    font-size:12px;
    color:#666;
  }
  ul.list li p.name{
    font-size:14px;
    color: #333;
  }
  ul.list li img{
    width: 50px;
    height: 50px;
    border-radius:50%;
    float: left;
  }
  ul.list li:hover,ul.list li.active{
    background:#eee;
  }
</style>
