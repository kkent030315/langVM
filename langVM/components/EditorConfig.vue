<template>
  <div class="editorConfig">
    <ul class="configList">
      <li class="configList__item">
        <button class="play">
            <PlayIcon class="play__icon" />
        </button>
      </li>
      <li class="configList__item">
        <div class="langSelector">
          <select class="langSelector__select">
            <option value="選択肢1">PHP</option>
            <option value="選択肢2">Ruby</option>
            <option value="選択肢3">JavaScript</option>
          </select>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import PlayIcon from "@/assets/svg/play.svg?inline";

export default {
  components: {
    PlayIcon,
  },
};
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
.editorConfig {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid $color-border;
}

.configList {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  padding: 0 10px;

  &__item {
    height: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;

    &:not(:last-child) {
      margin-right: 5px;
      border-right: 1px solid $color-border;
    }
  }
}

.langSelector {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;

  border: 1px solid $color-border;
  border-radius: 5px;
  position: relative;

  &__select {
    appearance: none;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    padding-right: 30px;
    color: $color-font;

    option {
      background: $color-background;
    }
  }

  // Arrow
  &::after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    position: absolute;
    right: 5%;
    top: 35%;
    border-bottom: $color-font 2px solid;
    border-right: $color-font 2px solid;
    transform: rotate(45deg) translateY(-30%);
    margin: 0 5px;
  }
}

.play {
    height: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &__icon {
        width: 18px;
        height: 18px;
        fill: green;
    }
}
</style>