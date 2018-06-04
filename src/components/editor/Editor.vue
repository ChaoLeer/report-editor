<template>
  <codemirror ref="codeMirror"
    :style="{width: width}"
    :value="value" @input="updateReportData($event, part)" :options="codemirrorOption"></codemirror>
</template>

<script>
import 'codemirror/lib/codemirror.css'
import { codemirror } from 'vue-codemirror'
// language
import 'codemirror/mode/javascript/javascript.js'
// theme css
import 'codemirror/theme/monokai.css'
import EventBus from '../eventbus'
// import ReportMixin from './mixins/report'
export default {
  name: 'BdrEdit',
  // mixins: [ReportMixin],
  components: {
    codemirror
  },
  props: {
    width: {
      type: String,
      default: '100%'
    },
    part: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['page', 'pheader', 'pfooter', 'master', 'mheader', 'mfooter'].indexOf(value) !== -1
      }
    },
    data: {
      type: Object,
      default () {
        return {
          pHeader: {},
          pFooter: {},
          header: {},
          master: {},
          footer: {},
          reportInfo: {
            page: {
              size: 'A4', // 纸张大小名称
              width: '210', // 宽
              height: '297', // 高
              left: 5, // 左边距
              top: 5, // 上边距
              right: 5, // 右边距
              bottom: 5 // 底边距
            }
          }
        }
      }
    }
  },
  data () {
    return {
      value: '',
      rpPage: '',
      // ********************************
      rpMasterElement: '',
      rpMasterHeaderElement: '',
      rpMasterFooterElement: '',
      // ********************************
      rpPageHeaderElement: '',
      rpPageFooterElement: '',
      // ********************************
      codemirrorOption: {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        mode: {
          name: 'text/javascript',
          json: true,
          mime: 'text/javascript'
        },
        theme: 'monokai'
      },
      baseOption: {}
    }
  },
  created () {
    const vm = this
    const editPage = {
      page: vm.data.reportInfo.page
    }
    vm.rpPage = JSON.stringify(editPage, null, '  ')
    // ********************************
    vm.rpMasterElement = JSON.stringify(vm.data.master, null, '  ')
    vm.rpMasterHeaderElement = JSON.stringify(vm.data.header, null, '  ')
    vm.rpMasterFooterElement = JSON.stringify(vm.data.footer, null, '  ')
    // ********************************
    vm.rpPageHeaderElement = JSON.stringify(vm.data.pHeader, null, '  ')
    vm.rpPageFooterElement = JSON.stringify(vm.data.pFooter, null, '  ')
    // ********************************
    switch (vm.part) {
      case 'page':
        vm.value = vm.rpPage
        break
      case 'pheader':
        vm.value = vm.rpPageHeaderElement
        break
      case 'pfooter':
        vm.value = vm.rpPageFooterElement
        break
      case 'master':
        vm.value = vm.rpMasterElement
        break
      case 'mheader':
        vm.value = vm.rpMasterHeaderElement
        break
      case 'mfooter':
        vm.value = vm.rpMasterFooterElement
        break
    }
    EventBus.$on('tab-click', function () {
      vm.refresh()
    })
  },
  methods: {
    updateReportData (newCode, type) {
      const vm = this
      const tmpData = JSON.parse(newCode, null, '  ')
      let obj = vm.data
      if (type === 'page') { // 报表头部
        vm.rpPage = newCode
        obj.reportInfo = tmpData
      } else if (type === 'pheader') { // 报表头部
        vm.rpPageHeaderElement = newCode
        obj.pHeader = tmpData
      } else if (type === 'pfooter') { // 报表尾部
        vm.rpPageFooterElement = newCode
        obj.pFooter = tmpData
      } else if (type === 'master') { // 表格内容
        vm.rpMasterElement = newCode
        obj.master = tmpData
      } else if (type === 'mheader') { // 表格头部
        vm.rpMasterHeaderElement = newCode
        obj.header = tmpData
      } else if (type === 'mfooter') { // 表格尾部
        vm.rpMasterFooterElement = newCode
        obj.footer = tmpData
      }
      vm.$emit('update:data', obj)
    },
    refresh () {
      this.$refs['codeMirror'].codemirror.refresh()
    }
  }
}
</script>

<style lang="scss">
  .cm-string,
  .CodeMirror-linenumber,
   .CodeMirror-line * {
    color: #ccc;
    background: none;
    font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 2;
    hyphens: none;
    font-size: 14px;
    letter-spacing: .01em;
  }
</style>
