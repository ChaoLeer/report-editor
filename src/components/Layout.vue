<template>
  <el-container class="bdr-layout">
    <el-header>
      <h1>{{options[0]['name']}} <small>【A4尺寸210mm×297mm】</small></h1>
    </el-header>
    <el-container>
      <el-main>
        <el-button-group class="bdr-controlbar">
          <el-button class="copy" type="primary" icon="el-icon-document" @click="clip()">复制</el-button>
          <el-button type="primary" icon="el-icon-download" @click="save()">存储</el-button>
          <el-button type="primary" icon="el-icon-delete" @click="clear()">清空</el-button>
          <el-button type="primary" icon="el-icon-upload" @click="update()">更新</el-button>
        </el-button-group>
        <report :option="options" :params="params"></report>
      </el-main>
      <el-aside class="bdr-layout__aside" width="800px">
        <report-editor class="report-editor" :data.sync="options" v-contextmenu:contextmenu></report-editor>
        <!-- <bdr-layout-aside :data.sync="options"></bdr-layout-aside> -->
        <v-contextmenu ref="contextmenu">
          <v-contextmenu-item @click="codeSnipt">代码块</v-contextmenu-item>
        </v-contextmenu>
      </el-aside>
    </el-container>
    <el-dialog title="收货地址" :visible.sync="dialogCodeVisible">
      <el-table :data="codeData" @row-click="rowClickHandler">
        <el-table-column property="name" label="name" width="150"></el-table-column>
        <el-table-column property="code" label="代码" width="200"></el-table-column>
        <el-table-column property="remark" label="备注"></el-table-column>
      </el-table>
    </el-dialog>
  </el-container>
</template>

<script>
// import BdrLayoutAside from './LayoutAside'
import ReportEditor from './editor'
import dataset from '../assets/dataset'
import options from './option'
import Clipboard from 'clipboard'
const resData = dataset.data
export default {
  name: 'HelloWorld',
  components: {
    // BdrLayoutAside,
    ReportEditor
  },
  data () {
    return {
      copied: false,
      options: options,
      dialogCodeVisible: false,
      data: resData,
      codeData: [
        {
          name: 'dateFormat',
          code: `function format(value) {
            if (value instanceof Date) {
              return value.getFullYear() + '-' + value.getMonth()
            } else if (typeof value === 'string') {
              const dt = new Date(value)
              if (dt.getDate() === value.substring(value.length - 2)) {
                return dt.getFullYear() + '-' + dt.getMouth
              }
            }`,
          remark: '日期格式化'
        }
      ],
      params: { name: '张安', sex: '男', address: '陕西省', fff: null }
    }
  },
  created () {
    this.init()
    // window.onbeforeunload = function (e) {
    //   e = window.event || e
    //   e.returnValue = ('确定离开当前页面吗？ 离开前请保存代码')
    // }
  },
  methods: {
    init () {
      this.options = options
      const localCode = window.localStorage.getItem('bdrEditorCode')
      if (localCode) {
        this.options = JSON.parse(localCode)
      }
    },
    clip () {
      console.info(this.options, Clipboard)
      const code = JSON.stringify(this.options)
      const clipboard = new Clipboard('.copy', {
        text () {
          return code
        }
      })
      clipboard.on('success', (e) => {
        e.clearSelection()
        clipboard.destroy()
        this.copied = true
        this.$message.success('代码已复制到剪贴板')
        setTimeout(() => {
          this.copied = false
        }, 2000)
      })
    },
    save () {
      window.localStorage.setItem('bdrEditorCode', JSON.stringify(this.options))
    },
    clear () {
      window.localStorage.removeItem('bdrEditorCode')
      this.init()
    },
    update () {
      this.$message.success('上传成功')
    },
    codeSnipt () {
      const vm = this
      vm.dialogCodeVisible = true
      console.info('代码块')
    },
    rowClickHandler (row, event, column) {
      console.info(row.code)
      if (!this.options[0]['plugins']) {
        this.options[0]['plugins'] = {}
      }
      this.options[0].plugins[row.name] = row.code
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .report-editor, .report-editor .CodeMirror {
    height: 100%;
  }
</style>
