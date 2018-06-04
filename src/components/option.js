
const header = [
  {
    type: 'TextBox',
    name: 'name',
    text: '姓名',
    style: {
      width: 40,
      color: 'blue'
    }
  },
  {
    type: 'TextBox',
    name: 'sex',
    text: '性别',
    style: {
      width: 15,
      color: 'red'
    }
  },
  {
    type: 'TextBox',
    name: 'age',
    text: '年龄',
    style: {
      width: 15,
      color: 'red'
    }
  },
  {
    type: 'TextBox',
    name: 'province',
    text: '省份',
    style: {
      width: 50,
      color: 'red'
    }
  }
]
const MasterDataElement = [
  {
    type: 'TextBox',
    name: 'name',
    text: '{name}',
    style: {
      width: 40,
      color: 'blue'
    }
  },
  {
    type: 'TextBox',
    name: 'sex',
    text: '{sex + $curRow}',
    style: {
      width: 15,
      color: 'red'
    }
  },
  {
    type: 'TextBox',
    name: 'age',
    text: '{age + ageUnit}',
    style: {
      width: '15mm',
      color: 'red'
    },
    TextRendering: (rows, style) => {
      if (rows.age >= 80) {
        style.color = 'green'
      }
      return style
    }
  },
  {
    type: 'TextBox',
    name: 'province',
    text: '{province.substr(0,2)}',
    style: {
      width: '20mm',
      color: 'red'
    }
  }
]
const FooterElement = [
  {
    type: 'TextBox',
    name: 'sum',
    text: '平均年龄',
    style: {
      top: 0,
      left: 0,
      width: 40,
      color: '#333'
    }
  },
  {
    type: 'CalcText',
    bind: 'age',
    calc: 'avg',
    style: {
      width: 40,
      top: 0,
      left: 40,
      color: 'blue',
      marginLeft: 15
    }
  },
  {
    type: 'TextBox',
    name: 'count',
    text: '合计人次',
    style: {
      top: 10,
      left: 0,
      width: 40,
      color: '#333'
    }
  },
  {
    type: 'CalcText',
    bind: 'age',
    calc: 'count',
    style: {
      width: 40,
      top: 10,
      left: 40,
      color: 'blue',
      marginLeft: 15
    }
  },
  {
    type: 'TextBox',
    name: 'count',
    text: '合计年龄',
    style: {
      top: 20,
      left: 0,
      width: 40,
      color: '#333'
    }
  },
  {
    type: 'CalcText',
    bind: 'age',
    calc: 'sum',
    style: {
      width: 40,
      top: 20,
      left: 40,
      color: 'blue',
      marginLeft: 15
    }
  }
]
const PageHeaderElement = [
  {
    type: 'TextBox',
    name: 'count',
    text: 'xxx统计报表',
    style: {
      top: 0,
      left: 80,
      fontSize: '30px',
      width: 40,
      color: '#333'
    }
  }
]

const PageFooterElement = [
  {
    type: 'TextBox',
    name: 'sum',
    text: '当前页平均年龄',
    style: {
      top: 0,
      left: 0,
      width: 40,
      color: '#333'
    }
  },
  {
    type: 'CalcText',
    bind: 'age',
    calc: 'avg',
    style: {
      width: 40,
      top: 0,
      left: 40,
      color: '#ff9900',
      marginLeft: 15
    }
  }
]
export default {
  pHeader: PageHeaderElement,
  pFooter: PageFooterElement,
  header: header,
  master: MasterDataElement,
  footer: FooterElement,
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
