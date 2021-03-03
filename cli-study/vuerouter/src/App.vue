<template>
  <div id="app">
    <router-link to="/home">home</router-link>
    <router-link to="/account">account</router-link>
    <router-link :to="'/user/'+userId">user</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    homeClick: function() {
      this.$router.push('/home');
    },
    accountClick: function() {
      this.$router.push('/account');
    },
    userClick: function() {
      this.$router.push('/user/:userId');
    }
  },
  data() {
    return {
      userId: 1001,
    }
  }
}
</script>

<style>
  .router-link-active {
    color: red;
  }
</style>
