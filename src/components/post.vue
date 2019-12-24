<template>
  <div>
    <div class="post pd-24" @click="openPostEditor">
      <h2 class="post__title m-b-12">{{ post.title }}</h2>
      <p class="post__content m-b-12">
        {{ post.content }}
      </p>
      <div class="post__footer">
        <div class="post__tags m-b-6">
          <span>Tags: </span>
          <span v-for="(tag, index) in post.tags" :key="index" class="tag">
            {{ tag }}
          </span>
        </div>
        <p class="post__created-at">Ngày tạo: {{ createdAt }}</p>
        <p class="post__updated-at">Ngày sửa: {{ updatedAt }}</p>
      </div>
      <div class="post__widget">
        <font-awesome-icon
          class="m-r-12"
          icon="pencil-alt"
          size="lg"
          @click.stop="openPostEditor"
        />
        <font-awesome-icon
          icon="trash-alt"
          size="lg"
          @click.stop="removingPostModalVisible = true"
        />
      </div>
    </div>

    <EditorModal
      modalTitle="Cập nhật bài đăng"
      :editorModalVisible="editorModalVisible"
      :post="post"
      @updatePostSuccess="onUpdatePostSuccess"
      @closeEditor="editorModalVisible = false"
    />

    <RemovingPostModal
      :post="post"
      :removingPostModalVisible="removingPostModalVisible"
      :removingWarningVisible="removingWarningVisible"
      :closeRemovingPostModal="closeRemovingPostModal"
      :confirmRemoving="confirmRemoving"
    />
  </div>
</template>

<script>
import { formatDate } from "@/utils/shared";
export default {
  name: "post",
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    EditorModal: () => import("@/components/editor-modal"),
    RemovingPostModal: () => import("@/components/removing-post-modal")
  },
  data() {
    return {
      editorModalVisible: false,
      removingPostModalVisible: false,
      removingWarningVisible: false
    };
  },
  computed: {
    createdAt() {
      return formatDate(new Date(this.post.created_at));
    },
    updatedAt() {
      return formatDate(new Date(this.post.updated_at));
    }
  },
  methods: {
    openPostEditor() {
      this.editorModalVisible = true;
    },
    onUpdatePostSuccess() {
      this.$emit("updatePostSuccess");
      this.editorModalVisible = false;
    },
    closeRemovingPostModal() {
      this.removingPostModalVisible = false;
    },
    confirmRemoving(confirmTitle) {
      if (confirmTitle === this.post.title) {
        this.removingWarningVisible = false;
        this.closeRemovingPostModal();
        this.$emit("removingPostSuccess", this.post.id);
      } else {
        this.removingWarningVisible = true;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/modal.scss";
.post {
  border-radius: 6px;
  width: calc((100vw - 250px) * 0.6);
  text-align: left;
  position: relative;
  border: 1px solid #ededed;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease;

  &__title {
    margin-bottom: 12px;
    color: #46185f;
  }

  &__content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 40px;
  }

  &__footer {
    display: grid;
    width: 100%;
    flex-direction: row;
    grid-template-columns: 50% 25% 25%;
  }

  .tag {
    background: #5c3e8b;
    color: #ffffff;
    padding: 6px;
    margin-right: 6px;
    border-radius: 6px;
    font-size: 0.875rem;
  }

  &__widget {
    position: absolute;
    top: 24px;
    right: 24px;

    svg:hover {
      cursor: pointer;
    }
  }

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
}
</style>
