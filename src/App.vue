<template>
  <div id="app">
    <div v-if="routeName !== 'login'">
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
@import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700&display=swap&subset=vietnamese");
@import "assets/styles/resets";
@import "assets/styles/quick-class";

#app {
  font-family: "Roboto", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333e49;
  font-size: 16px;
}
</style>
