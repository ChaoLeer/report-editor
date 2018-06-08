<template>
  <codemirror ref="codeMirror"
    :style="{width: width}"
    :value="value" @input="updateReportData($event)" :options="codemirrorOption"></codemirror>
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
    // part: {
    //   validator: function (value) {
    //     // 这个值必须匹配下列字符串中的一个
    //     return ['page', 'pheader', 'pfooter', 'master', 'mheader', 'mfooter'].indexOf(value) !== -1
    //   }
    // },
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      value: '',
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
  watch: {
    data (val) {
      const vm = this
      vm.value = JSON.stringify(vm.data, null, '  ')
    }
  },
  created () {
    const vm = this
    vm.value = JSON.stringify(vm.data, null, '  ')
    EventBus.$on('tab-click', function () {
      vm.refresh()
    })
  },
  methods: {
    updateReportData (newCode, type) {
      const vm = this
      const tmpData = JSON.parse(newCode, null, '  ')
      vm.$emit('update:data', tmpData)
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
