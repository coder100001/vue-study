<template>
  <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="../assets/img/tabBar/2fe7ffc2c0894422a2c2ab3cf.png" alt="">
        <img slot="item-icon-actived" src="../assets/img/tabBar/home_actived.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="../assets/img/tabBar/4e527425a7f62e825d49c42ae.png" alt="">
        <img slot="item-icon-actived" src="../assets/img/tabBar/cate_actived.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="../assets/img/tabBar/886d841df3a2f2ba26db5eabe.png" alt="">
        <img slot="item-icon-actived" src="../assets/img/tabBar/shop_car_actived.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="../assets/img/tabBar/0e43a67a4c7d46c6c4a8463d7.png" alt="">
        <img slot="item-icon-actived" src="../assets/img/tabBar/mine_actived.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'

export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem,
    }
}
</script>