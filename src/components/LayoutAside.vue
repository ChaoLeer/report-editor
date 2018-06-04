<template>
  <!-- <div class="bdr-taglist">
    <el-tag
      v-for="(tag,idx) in tagList"
      :key="idx"
      size="mini">{{tag.text}}</el-tag>
  </div> -->
  <el-tabs v-model="activeName" @tab-click="handleClick" lazy>
    <el-tab-pane label="报表" name="first">
      <span class="bdr-title">报表头部</span>
      <bdr-editor v-bind="$attrs" part="pheader"></bdr-editor>
      <span class="bdr-title">报表尾部</span>
      <bdr-editor v-bind="$attrs" part="pfooter"></bdr-editor>
    </el-tab-pane>
    <el-tab-pane label="主项" name="second">
      <span class="bdr-title">主项头部</span>
      <bdr-editor v-bind="$attrs" part="mheader"></bdr-editor>
      <span class="bdr-title">主项</span>
      <bdr-editor v-bind="$attrs" part="master"></bdr-editor>
      <span class="bdr-title">主项尾部</span>
      <bdr-editor v-bind="$attrs" part="mfooter"></bdr-editor>
    </el-tab-pane>
    <el-tab-pane label="页面" name="third">
      <bdr-editor v-bind="$attrs" part="page"></bdr-editor>
      <!-- <rp-edit  part="page" ></rp-edit> -->
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import BdrEditor from './editor/Editor'
import EventBus from './eventbus'
export default {
  components: {
    BdrEditor
  },
  data () {
    return {
      activeName: 'second',
      tagList: [{
        text: 'row'
      }, {
        text: 'label'
      }]
    }
  },
  methods: {
    handleClick (tab, event) {
      const vm = this
      vm.$nextTick(() => {
        EventBus.$emit('tab-click')
      })
    }
  }
}
</script>
