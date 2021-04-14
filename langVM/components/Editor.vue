<template>
  <div class="aceRoot" id="ace"></div>
</template>

<script>
export default {
  mounted() {
    const editor = ace.edit("ace");
    editor.setOptions({
      theme: "ace/theme/tomorrow_night",
      mode: "ace/mode/javascript",
      printMargin: false,
      vScrollBarAlwaysVisible: true,
      scrollPastEnd: 1,
      fontSize: 12,
    });
    editor.setValue("function abc() {\n    return null\n}");
  },
};
</script>

<style lang="scss">
.ace_gutter {
  &,
  &-cell {
    color: $color-font;
    background: $color-background-inner !important;
  }
}

.ace_scroller {
  background: $color-background;
}

.ace_scrollbar {
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb,
  &::-webkit-scrollbar-track {
    border-left: none;
  }

  &::-webkit-scrollbar {
    width: 17px;
  }

  &::-webkit-scrollbar-thumb {
    background: $color-background-inner;
  }

  &::-webkit-scrollbar-track {
    background: $color-background;
  }
}
</style>

<style lang="scss" scoped>
.aceRoot {
  width: 100%;
  height: 100%;
}
</style>