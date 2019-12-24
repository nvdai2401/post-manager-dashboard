<template>
  <div
    v-if="removingPostModalVisible"
    class="overlay"
    @click.self="closeRemovingPostModal"
  >
    <div class="popup">
      <h3 class="m-t-24">
        Bạn có chắc chắn là muốn xóa post
        <span>{{ post.title }}</span
        >?
      </h3>
      <p class="alert-text m-t-6 m-b-6">
        Nếu bạn muốn xóa post này thì vui lòng nhập lại tiêu đề của post (<span
          >{{ post.title }}</span
        >) để xác nhận xóa.
      </p>
      <div class="form-item m-b-12">
        <label>Tiêu đề: </label>
        <input
          type="text"
          v-model="confirmTitle"
          placeholder="Tiêu đề của post"
        />
      </div>
      <p v-if="removingWarningVisible" class="alert-text">
        <span>Nhập lại tiêu đề post.</span>
      </p>
      <button
        class="button button-secondary m-t-12"
        @click="confirmRemoving(confirmTitle)"
        :disabled="isDisable"
      >
        Xác nhận
      </button>
      <button class="button m-t-12 m-l-12" @click="closeRemovingPostModal">
        Hủy bỏ
      </button>
      <span class="close" @click="closeRemovingPostModal">&times;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "removing-post-modal",
  props: {
    post: Object,
    removingPostModalVisible: Boolean,
    removingWarningVisible: Boolean,
    closeRemovingPostModal: Function,
    confirmRemoving: Function
  },
  data() {
    return {
      confirmTitle: ""
    };
  },
  computed: {
    isDisable() {
      return this.confirmTitle !== this.post.title;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/modal.scss";

.alert-text {
  span {
    color: #ef4339;
  }
}
</style>
