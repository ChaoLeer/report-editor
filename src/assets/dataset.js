import Mock from 'mockjs'
const dataset = Mock.mock({
  'data|40': [
    {
      'name': '@cname',
      'sex|1': ['男', '女'],
      'age|1-100': 100,
      'ageUnit|1': ['岁', '月', '天'],
      'province': '@province',
      'city': '@city',
      'county': '@county'
    }
  ]
})
export default dataset
