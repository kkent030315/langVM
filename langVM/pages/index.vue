<template>
  <div class="editorRoot">
    <div class="editorSection">
      <EditorConfig />
      <div class="editorContext">
        <Editor />
      </div>
      <EditorStdIn />
    </div>
    <div class="editorSection">
      <OutputLogs />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
.editorRoot {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;

  .editorSection {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
      border-right: 1px solid $color-border;
    }
  }

  .editorContext {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 auto;
  }
}
</style>