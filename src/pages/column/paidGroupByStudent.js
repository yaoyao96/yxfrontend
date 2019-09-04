export default [
  { name: 'name',
    required: true,
    label: '学生名',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true },
  { name: 'amount',
    required: true,
    label: '年度总金额',
    align: 'left',
    field: row => row.amount ? row.amount : 0.00,
    format: val => `￥${val}`,
    sortable: true,
    sort: (a, b, rowA, rowB) => parseInt(a * 100, 10) - parseInt(b * 100, 10)
  },
  { name: 'year',
    required: true,
    label: '缴费年份',
    align: 'left',
    field: row => row.year,
    sortable: true }
]
