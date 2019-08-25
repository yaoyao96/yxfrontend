export default [
  { name: 'month',
    required: true,
    label: '缴费月数',
    align: 'left',
    field: row => row.number_of_month,
    format: val => `${val}个月`,
    sortable: true },
  { name: 'amount',
    required: true,
    label: '金额',
    align: 'left',
    field: row => row.amount,
    format: val => `￥${val}`,
    sortable: true,
    sort: (a, b, rowA, rowB) => parseInt(a * 100, 10) - parseInt(b * 100, 10)
  },
  { name: 'time',
    required: true,
    label: '缴费时间',
    align: 'left',
    field: row => row.create_time,
    sortable: true }
]
// 'number_of_month','amount','create_time','student'
