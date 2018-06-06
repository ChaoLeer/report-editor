<template>
  <el-container class="bdr-layout">
    <el-header>
      <h1>报表生成 <small>【A4尺寸210mm×297mm】</small></h1>
    </el-header>
    <el-container>
      <el-main>
        {{options}}
        <!-- <bdr-editor part="pheader"></bdr-editor> -->
        <report :option="options"></report>
      </el-main>
      <el-aside class="bdr-layout__aside" width="400px">
        <bdr-layout-aside :data.sync="options"></bdr-layout-aside>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
import BdrLayoutAside from './LayoutAside'
import dataset from '../assets/dataset'
import options from './option'
const resData = dataset.data
export default {
  name: 'HelloWorld',
  components: {
    BdrLayoutAside
  },
  data () {
    return {
      options: options,
      data: resData
    }
  },
  created () {
    console.info(options)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
