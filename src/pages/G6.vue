<template>
  <div>
    <el-container>
      <el-header>
        <div class="g6-layout" id="toolbar">
          <!-- <el-button data-command="copy" class="command">复制</el-button>
          <el-button data-command="paste" class="command disable">粘贴</el-button>
          <el-button data-command="undo" class="command" >撤销</el-button> -->
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <div class="g6-layout" id="itempannel">
            <el-tag type="success" class="getItem" data-type="node" data-shape="rect">文本框</el-tag>
          </div>
        </el-aside>
        <el-main>
          <div class="g6-layout" id="page"></div>
        </el-main>
      </el-container>
    </el-container>
    <div id="contextmenu">
      <el-button data-command="copy" class="command">复制</el-button>
      <el-button data-command="paste" class="command">粘贴</el-button>
      <el-button data-command="undo" class="command" >撤销</el-button>
    </div>
    <div class="g6-layout" id="detailpannel">
      <div data-status="node-selected">节点属性栏</div>
      <div data-status="edge-selected">边属性栏</div>
      <div data-status="group-selected">群组属性栏</div>
      <div data-status="canvas-selected">画布属性栏</div>
      <div data-status="multi-selected">多选时属性栏</div>
    </div>
    <!-- <div id="mountNode"></div> -->
  </div>
</template>

<script>
import G6Editor from '@antv/g6-editor'
export default {
  data () {
    return {
      loading: false,
      editor: null,
      page: null,
      data: {
        nodes: [{
          id: 'node1',
          x: 100,
          y: 200
        }, {
          id: 'node2',
          x: 300,
          y: 200
        }],
        edges: [{
          id: 'edge1',
          target: 'node2',
          source: 'node1'
        }]
      }
    }
  },
  mounted () {
    const editor = new G6Editor()
    const contextmenu = new G6Editor.Contextmenu({
      container: 'contextmenu'
    })
    const page = new G6Editor.Flow({
      graph: {
        container: 'page',
        height: 700
      },
      grid: {
        cell: 10, // 网孔尺寸
        line: {
          stroke: '#cacaca'
        } // 网格线样式
      },
      align: {
        grid: true
      },
      noEndEdge: false,
      edgeResizeable: false
    })
    editor.add(contextmenu)
    editor.add(page)
    page.on('afteritemselected', ev => {
      console.info(ev)
      // this.setState({
      //   selectedModel: ev.item.getModel()
      // })
    })
    const toolbar = new G6Editor.Toolbar({
      container: 'toolbar'
    })
    const detailpannel = new G6Editor.Detailpannel({
      container: 'detailpannel'
    })
    const itempannel = new G6Editor.Itempannel({
      container: 'itempannel'
    })
    editor.add(toolbar)
    editor.add(detailpannel)
    editor.add(itempannel)
    this.editor = editor
    this.page = page
  },
  methods: {
    copy () {
      console.info('copy command')
    },
    paste () {
      console.info('paste command')
    },
    custom () {
      console.info('custom command')
    }
  }
}
</script>
<style lang="scss" scoped>
  #page,
  .g6-layout {
    height: 100%;
  }
</style>
