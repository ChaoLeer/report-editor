<template>
  <el-container class="bdr-layout">
    <el-header>
      <h1>{{options[0]['name']}} <small>【A4尺寸210mm×297mm】</small></h1>
    </el-header>
    <el-container>
      <el-main>
        <!-- <bdr-editor part="pheader"></bdr-editor> -->
        <report :option="options" :params="params"></report>
      </el-main>
      <el-aside class="bdr-layout__aside" width="800px">
        <report-editor class="report-editor" :data.sync="options"></report-editor>
        <!-- <bdr-layout-aside :data.sync="options"></bdr-layout-aside> -->
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
// import BdrLayoutAside from './LayoutAside'
import ReportEditor from './editor'
import dataset from '../assets/dataset'
import options from './option'
const resData = dataset.data
export default {
  name: 'HelloWorld',
  components: {
    // BdrLayoutAside,
    ReportEditor
  },
  data () {
    return {
      options: options,
      data: resData,
      params: { name: '张安', sex: '男', address: '陕西省', fff: null }
    }
  },
  created () {
    console.info(options)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .report-editor, .report-editor .CodeMirror {
    height: 100%;
  }
</style>
