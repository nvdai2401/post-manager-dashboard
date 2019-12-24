<template>
  <div class="sidebar-container">
    <h1 class="p-l-12">Posts Manager</h1>
    <ul>
      <li :class="[{ active: routeName === 'post-list' }, 'p-l-12']">
        <router-link to="/">Bài đăng</router-link>
      </li>
      <li :class="[{ active: routeName === 'info' }, 'p-l-12']">
        <router-link to="/info">Thông tin cá nhân</router-link>
      </li>
      <li class="p-l-12" @click="signOut">Đăng xuất</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "side-bar",
  computed: {
    routeName() {
      return this.$route.name;
    }
  },
  methods: {
    signOut() {
      localStorage.setItem("is_authenticated", false);
      this.$router.push({ name: "login" });
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
  background-color: #46185f;
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
    border-bottom: 1px solid #5c3e8b;

    a {
      display: inline-block;
      width: 100%;
    }

    &:hover {
      cursor: pointer;
      background-color: #5c3e8b;
    }
  }
}

.active {
  background-color: #5c3e8b;
}
</style>
