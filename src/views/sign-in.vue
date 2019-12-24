<template>
  <div class="sign-in">
    <div class="sign-in-form">
      <h2>Đăng nhập</h2>
      <div class="form-item m-b-12">
        <label>Username: </label>
        <input type="text" v-model="userName" placeholder="Username" />
      </div>
      <div class="form-item m-b-12">
        <label>Password: </label>
        <input type="password" v-model="password" placeholder="Password" />
      </div>
      <p v-if="alertTextVisible" class="alert-text">
        Nhập user là admin và password là admin để đăng nhập.
      </p>
      <button class="button button-primary m-t-12" @click="signIn">
        Đăng nhập
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "sign-in",
  data() {
    return {
      userName: "admin",
      password: "admin",
      alertTextVisible: false
    };
  },
  methods: {
    signIn() {
      if (this.userName === "admin" && this.password === "admin") {
        localStorage.setItem("is_authenticated", true);
        this.alertTextVisible = false;
        this.$router.push({ name: "post-list" });
      } else {
        this.alertTextVisible = true;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.sign-in {
  height: 100vh;
  background: linear-gradient(
    to left,
    rgba(7, 27, 82, 1) 0%,
    rgba(0, 128, 128, 1) 100%
  );
  display: flex;
  justify-content: center;
}

.sign-in-form {
  width: 300px;
  height: fit-content;
  margin-top: 180px;
  padding: 20px;
  background: #fff;
  border-radius: 6px;

  h2 {
    text-align: center;
  }

  .form-item {
    label {
      font-weight: 500;
      font-size: 1.2rem;
    }

    input {
      font-family: inherit;
      display: block;
      margin-top: 6px;
      width: 100%;
      line-height: 1.5rem;
      padding: 6px;
      font-size: 0.875rem;
      border-radius: 6px;
      border: 1px solid #696865;
      outline: none;
    }
  }
}
.alert-text {
  font-size: 0.875rem;
  color: #ef4339;
}
</style>
