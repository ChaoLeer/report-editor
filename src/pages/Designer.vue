<template>
  <el-container class="bdr-layout">
    <el-header>
      <h1>设计器<small>【A4尺寸210mm×297mm】</small></h1>
    </el-header>
    <el-container>
      <el-main class="report-main">
        <div class="report-designer">
          <d-text v-for="(ele, idx) in eleList" :key="idx"
            :width.sync="ele.width"
            :height.sync="ele.height"
            :x.sync="ele.x"
            @click.native="selectEle(ele, idx, eleList)"
            :y.sync="ele.y">{{ele.text}}</d-text>
        </div>
      </el-main>
      <el-aside class="bdr-layout__aside" width="300px">
        <div class="bdr-taglist">
          <el-tag
            v-for="(tag,idx) in tagList"
            :key="idx"
            size="mini">{{tag.text}}</el-tag>
        </div>
        <el-form ref="form" :model="selectedModel"
          label-width="80px" size="mini">
          <el-form-item label="宽度">
            <el-input-number v-model="selectedModel.width" controls-position="right"
              :min="10"></el-input-number>
          </el-form-item>
          <el-form-item label="高度">
            <el-input-number v-model="selectedModel.height" controls-position="right"
              :min="10"></el-input-number>
          </el-form-item>
          <el-form-item label="x">
            <el-input-number v-model="selectedModel.x" controls-position="right"></el-input-number>
          </el-form-item>
          <el-form-item label="y">
            <el-input-number v-model="selectedModel.y" controls-position="right"></el-input-number>
          </el-form-item>
          <el-form-item label="文本">
            <el-input v-model="selectedModel.text"></el-input>
          </el-form-item>
        </el-form>
        {{selectedModel}}
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
import DText from '@/components/Text.vue'
export default {
  name: 'HelloWorld',
  components: {
    DText
  },
  data () {
    return {
      selectedModel: {},
      tagList: [{
        text: '文本'
      }],
      eleList: [{
        width: 10,
        height: 10,
        x: 0,
        y: 0,
        text: '姓名'
      }, {
        width: 20,
        height: 30,
        x: 10,
        y: 0,
        text: '聂风'
      }]
    }
  },
  created () {
  },
  methods: {
    selectEle (ele, idx, all) {
      console.info(ele)
      this.selectedModel = {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        text: ''
      }
      this.selectedModel = ele
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.report-main {
  background-image: linear-gradient(45deg,#f5f5f5 25%,transparent 0,transparent 75%,#f5f5f5 0),linear-gradient(45deg,#f5f5f5 25%,transparent 0,transparent 75%,#f5f5f5 0);
  background-position: 0 0,13px 13px;
  background-size: 26px 26px;
}
.report-designer {
  width: 210mm;
  height: 297mm;
  border: 1px solid #eaeaea;
  margin: 0 auto;
  position: relative;
  background: #fff;
}
</style>
