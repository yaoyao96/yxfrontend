export default [
  { name: 'course',
    required: true,
    label: '缴费课程数',
    align: 'left',
    field: row => row.number_of_course,
    format: val => `${val}节`,
    sortable: true },
  { name: 'amount',
    required: true,
    label: '金额',
    align: 'left',
    field: row => row.amount,
    format: val => `￥${val}`,
    sortable: true },
  { name: 'time',
    required: true,
    label: '缴费时间',
    align: 'left',
    field: row => row.create_time,
    sortable: true }
]
// 'url', 'id','number_of_course','amount','create_time','student'
