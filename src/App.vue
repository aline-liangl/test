<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/myhome" >
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/myhome.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/mycategory.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/shop.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/mycart.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/my.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/mmy.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    
    </tab-bar>   
    <router-view></router-view>
  </div>
</template>
<script>
  import TabBar from './components/tabbar/TabBar.vue'
  import TabBarItem from './components/tabbar/TabBarItem.vue'
  export default{
    name:'App',
    components:{
      TabBar,
      TabBarItem
      
    }
  }
</script>

<style lang="scss">

@import "./assets/css/base.css";

 
</style>
