<template>
  <div class="main-view">
    <div class="post-list">
      <template v-for="post in postList">
        <Post
          :key="post.id"
          :post="post"
          @updatePostSuccess="onUpdatePostSuccess"
          @removingPostSuccess="onRemovingPostSuccess"
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
      const postList = JSON.parse(localStorage.getItem("post_list"));
      return postList ? postList : [];
    },
    onUpdatePostSuccess() {
      this.postList = this.getPostList();
    },
    onRemovingPostSuccess(id) {
      const postIndex = this.postList.findIndex(post => post.id === id);
      this.postList.splice(postIndex, 1);
      localStorage.setItem("post_list", JSON.stringify(this.postList));
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
