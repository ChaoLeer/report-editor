
// 默认高度
const height = 10

const style = {
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'flex-start',
  display: 'flex'
}
const childStyle = {
  color: '#000000', // 字体颜色
  fontSize: '20px', // 字体大小
  fontFamily: '宋体', // 字体类别
  background: '#ffffff', // 背景
  border: '1px solid red', // 边框
  textAlign: 'center', // 文本对齐
  width: 20, // 宽度
  height: height // 高度
}
// option 默认值
export default {
  unit: 'mm',
  // 数据集
  dataset: {},
  // 参数
  params: {},
  type: 'report', // 报表类型分table-简单报表，report-复杂报表
  // 页面设置
  page: {
    size: 'A4', //纸张大小名称
    width: '210', //宽
    height: '297', //高
    left: 5, // 左边距
    top: 5, // 上边距
    right: 5, // 右边距
    bottom: 5 // 底边距
  },
  // 报表头
  title: {
    show: false,
    text: '', // 报表名称
    style: style,
    childStyle: Object.assign(childStyle, { border: '1px solid blue' }),
    height: height,
    className: ''
  },
  // 页标头
  pageHeader: {
    show: true,
    style: style,
    layout: 'fix',
    childStyle: { ...childStyle },
    height: height,
    className: ''
  },
  // 数据标头
  header: {
    show: true,
    style: style,
    childStyle: { ...childStyle },
    height: height,
    className: ''
  },
  // 主项数据
  masterData: {
    show: true,
    style: style,
    header: [
      { lable: '姓名', name: 'name', style: { width: '20mm' } },
      { lable: '性别', name: 'sex', style: { width: '10mm' } },
      { lable: '年龄', name: 'age', style: { width: '20mm' } },
      { lable: '地址', name: 'province', style: { width: '50mm' } }
    ],
    footer: {
      show: true,
      column: [{ lable: '平均年龄', name: 'age', type: 'avg' }]
    },
    childStyle: { ...childStyle },
    height: 10,
    RowRendering: (row, style) => {
      if (row.age && row.age > 40) {
        style.borderBottom = '1px solid blue'
      }
      return style
    },
    className: ''
  },
  // 数据注脚
  footer: {
    show: true,
    style: style,
    layout: 'fix',
    childStyle: { ...childStyle },
    height: 30,
    className: ''
  },
  // 页注脚
  pageFooter: {
    show: true,
    style: style,
    childStyle: { ...childStyle },
    height: 10,
    className: ''
  }
}