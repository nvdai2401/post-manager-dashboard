<template>
  <div id="app">
    <div v-if="routeName !== 'sign-in'">
      <SideBar />
      <Header />
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import SideBar from "@/components/side-bar.vue";

export default {
  name: "home",
  components: {
    SideBar,
    Header
  },
  computed: {
    routeName() {
      return this.$route.name;
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic&subset=latin,cyrillic");
@import "assets/styles/resets";
@import "assets/styles/quick-class";

#app {
  font-family: "RobotoDraft", "Roboto", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  font-size: 16px;
}
</style>
