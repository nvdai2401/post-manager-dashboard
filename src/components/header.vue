<template>
  <div class="header">
    <h1>This is side-bar</h1>
  </div>
</template>

<script>
export default {
  name: "side-bar"
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
}
</style>
