<template>
  <div class="sidebar-container">
    <h1 class="p-l-12">Posts Manager</h1>
    <ul>
      <li :class="[{ active: routeName === 'post-list' }, 'p-l-12']">
        <router-link to="/">Bài đăng</router-link>
      </li>
      <li class="p-l-12" @click="signOut">Đăng xuất</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "header",
  computed: {
    routeName() {
      return this.$route.name;
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar-container {
  position: fixed;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: #0281b7;
}
h1 {
  color: #ffffff;
  border-bottom: 1px solid #f9f9f9;
  line-height: 71px;
}

ul {
  margin-top: 24px;
  text-align: left;
  color: #ffffff;
  li {
    font-size: 1rem;
    line-height: 36px;
    border-bottom: 1px solid #239fd5;

    a {
      display: inline-block;
      width: 100%;
    }

    &:hover {
      cursor: pointer;
      background-color: #239fd5;
    }
  }
}

.active {
  background-color: #239fd5;
}
</style>
