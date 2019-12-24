<template>
  <div class="header">
    <button class="button button-primary" @click="openPostEditor">
      Đăng bài viết
    </button>
    <EditorModal
      modalTitle="Đăng bài viết"
      :editorModalVisible="editorModalVisible"
      :post="{}"
      @createPostSuccess="onCreatePostSuccess"
      @closeEditor="closeEditor"
    />
  </div>
</template>

<script>
import EditorModal from "@/components/editor-modal";
import { EventBus } from "@/utils/event-bus";
export default {
  components: {
    EditorModal
  },
  data() {
    return {
      editorModalVisible: false
    };
  },
  methods: {
    openPostEditor() {
      this.editorModalVisible = true;
    },
    closeEditor() {
      this.editorModalVisible = false;
    },
    onCreatePostSuccess() {
      EventBus.$emit("createPostSuccess");
      this.closeEditor();
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  width: calc(100vw - 250px);
  height: 72px;
  background-color: #eef1f6;
  position: fixed;
  z-index: 100;
  left: 250px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 60px;
}
</style>
