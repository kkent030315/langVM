<template>
  <div class="editorStdin">
    <div class="editorStdinHeader">
      <TerminalIcon class="editorStdinHeader__icon" />
      <p>STDIN</p>
    </div>
    <div class="editorStdinContext">
        <div class="editorStdinContext__stdin" id="stdin"></div>
    </div>
  </div>
</template>

<script>
import TerminalIcon from "@/assets/svg/terminal.svg?inline";

export default {
  components: {
    TerminalIcon,
  },
  mounted() {
    this.$langVM.stdinEditor = ace.edit("stdin");
    this.$langVM.stdinEditor.setOptions({
      theme: "ace/theme/tomorrow_night",
      mode: "ace/mode/text",
      printMargin: false,
      vScrollBarAlwaysVisible: true,
      scrollPastEnd: 1,
      fontSize: 12,
    });
  },
};
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
.editorStdinHeader {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid $color-border;

  &__icon {
    width: 18px;
    height: 18px;
    fill: $color-icon;
    margin-right: 10px;
  }
}

.editorStdin {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid $color-border;
}

.editorStdinContext {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 auto;

  &__stdin {
      width: 100%;
      height: 100%;
  }
}
</style>