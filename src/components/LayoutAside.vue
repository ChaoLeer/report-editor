<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="元素" name="first">
      <div class="bdr-taglist">
        <el-tag
          v-for="(tag,idx) in tagList"
          :key="idx"
          size="mini">{{tag.text}}</el-tag>
      </div>
    </el-tab-pane>
    <el-tab-pane label="属性" name="second">属性</el-tab-pane>
    <el-tab-pane label="布局" name="third">布局</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
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
      console.log(tab, event)
    }
  }
}
</script>
