<template>
  <vue-draggable-resizable
    class="designer-handler"
    :style="{border: border}"
    :minh="10"
    :minw="10"
    :w="width" :h="height" :x="x" :y="y" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true">
    <slot></slot>
  </vue-draggable-resizable>
</template>
<script>
import VueDraggableResizable from 'vue-draggable-resizable'
export default {
  components: {
    VueDraggableResizable
  },
  props: {
    width: {
      default: 20
    },
    height: {
      default: 32
    },
    x: {
      default: 0
    },
    y: {
      default: 0
    }
  },
  data () {
    return {
      border: '1px solid #787878'
      // width: 0,
      // height: 0,
      // x: 0,
      // y: 0
    }
  },
  methods: {
    onResize (x, y, width, height) {
      // this.x = x
      // this.y = y
      // this.width = width
      // this.height = height
      this.$emit('update:x', x)
      this.$emit('update:y', y)
      this.$emit('update:width', width)
      this.$emit('update:height', height)
    },
    onDrag (x, y) {
      // this.x = x
      // this.y = y
      this.$emit('update:x', x)
      this.$emit('update:y', y)
    }
  }
}
</script>
<style lang="scss">
.designer-item {
  &.active:hover {
    cursor: move;
  }
}

$hand: 6px;
.designer-handler {
  &.active:hover {
    cursor: move;
  }
  .handle {
    width: $hand;
    height: $hand;
    background: #fff;
    border: 1px solid #cacaca;
    &.handle-tl {
      top: -$hand/2;
      left: -$hand/2;
    }
    &.handle-tm {
      top: -$hand/2;
      margin-left: -$hand/2;
    }
    &.handle-tr {
      top: -$hand/2;
      right: -$hand/2;
    }
    &.handle-mr {
      top: 50%;
      margin-top: -$hand/2;
      right: -$hand/2;
    }
    &.handle-br {
      bottom: -$hand/2;
      right: -$hand/2;
    }
    &.handle-bm {
      bottom: -$hand/2;
      margin-left: -$hand/2;
    }
    &.handle-bl {
      bottom: -$hand/2;
      left: -$hand/2;
    }
    &.handle-ml {
      margin-top: -$hand/2;
      left: -$hand/2;
    }
  }
}
</style>
