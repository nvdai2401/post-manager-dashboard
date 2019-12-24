<template>
  <div v-if="editorModalVisible" class="overlay" @click.self="closeEditorModal">
    <div class="popup">
      <h2 class="m-b-12">{{ modalTitle }}</h2>
      <span class="close" @click="closeEditorModal">&times;</span>
      <p v-if="alertTextVisible" class="alert-text">
        Điền đầy đủ thông tin vào form!
      </p>
      <div class="form m-t-12">
        <div class="form-item m-b-12">
          <label>Tiêu đề: </label>
          <input
            v-focus
            type="text"
            v-model="title"
            placeholder="Tiêu đề của post"
            required
          />
        </div>
        <div class="form-item m-b-12">
          <label>Nội dung bài viết:</label>
          <textarea
            v-model="postContent"
            rows="5"
            cols="50"
            placeholder="Nội dung của post"
            required
          ></textarea>
        </div>
        <div class="form-item m-b-12">
          <label>Tags:</label>
          <input
            type="text"
            v-model="tags"
            placeholder="Mỗi tag cách nhau bởi dấu phẩy"
            required
          />
        </div>
        <button class="button button-primary m-t-12" @click="submitForm">
          Xác nhận
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { generateID } from "@/utils/shared";
export default {
  name: "EditorModal",
  props: {
    editorModalVisible: Boolean,
    modalTitle: String,
    post: Object
  },
  data() {
    return {
      postList: [],
      title: "",
      postContent: "",
      tags: "",
      alertTextVisible: false
    };
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  watch: {
    editorModalVisible(val) {
      if (val) {
        this.postList = this.getPostList();
      }
    }
  },
  methods: {
    getPostList() {
      return JSON.parse(localStorage.getItem("post_list"));
    },
    submitForm() {
      if (this.title && this.postContent && this.tags) {
        if (!Object.keys(this.post).length) {
          this.createPost();
          this.resetForm();
          this.$emit("createPostSuccess");
        }
      } else {
        this.alertTextVisible = true;
      }
    },
    closeEditorModal() {
      this.alertTextVisible = false;
      this.$emit("closeEditor");
    },
    createPost() {
      const postId = this.postList.length
        ? `post-${this.postList.length + 1}-${generateID(6)}`
        : `first-post-${generateID(6)}`;
      const newPost = {
        id: postId,
        title: this.title,
        content: this.postContent,
        tags: this.tags.split(",").map(str => str.trim().replace(/\s+/g, " ")),
        created_at: new Date(),
        updated_at: new Date()
      };
      this.postList.unshift(newPost);
      localStorage.setItem("post_list", JSON.stringify(this.postList));
    },
    resetForm() {
      this.title = "";
      this.postContent = "";
      this.tags = "";
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/modal.scss";

.alert-text {
  text-align: center;
  line-height: 40px;
  color: #ef4339;
}
</style>
