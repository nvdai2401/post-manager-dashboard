<template>
  <div class="main-view">
    <div class="post-list">
      <template v-for="post in postList">
        <Post
          :key="post.id"
          :post="post"
          @updatePostSuccess="onUpdatePostSuccess"
          class="m-t-24"
        />
      </template>
    </div>
  </div>
</template>

<script>
import Post from "@/components/post";
import { EventBus } from "@/utils/event-bus";
export default {
  name: "post-list",
  components: {
    Post
  },
  data() {
    return {
      postList: []
    };
  },
  methods: {
    getPostList() {
      return JSON.parse(localStorage.getItem("post_list"));
    },
    onUpdatePostSuccess() {
      this.postList = this.getPostList();
    }
  },
  mounted() {
    if (localStorage.hasOwnProperty("post_list")) {
      this.postList = this.getPostList();
    }
    EventBus.$on("createPostSuccess", () => {
      this.postList = this.getPostList();
    });
  }
};
</script>

<style scoped lang="scss">
.post-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
