export default [
  { name: 'year',
    required: true,
    label: '年份',
    align: 'left',
    field: row => row.year,
    format: val => `${val}年`,
    sortable: true },
  { name: 'sumJan',
    required: true,
    label: '1月',
    align: 'left',
    field: row => row.sumJan,
    format: val => `￥${val}`,
    sortable: true,
    sort: (a, b, rowA, rowB) => parseInt(a * 100, 10) - parseInt(b * 100, 10)
  },
  { name: 'sumFeb',
    required: true,
    label: '2月',
    align: 'left',
    field: row => row.sumFeb,
    format: val => `￥${val}`,
    sortable: true,
    sort: (a, b, rowA, rowB) => parseInt(a * 100, 10) - parseInt(b * 100, 10)
  },
  { name: 'sumMar',
    required: true,
    label: '3月',
    align: 'left',
    field: row => row.sumMar,
    format: val => `￥${val}`,
    sortable: true,
    sort: (a, b, rowA, rowB) => parseInt(a * 100, 10) - parseInt(b * 100, 10)
  },
  { name: 'sumApr',
    required: true,
    label: '4月',
    align: 'left',
    field: row => row.sumMar,
    format: val => `￥${val}`,
    sortable: true,
    sort: (a, b, rowA, rowB) => parseInt(a * 100, 10) - parseInt(b * 100, 10)
  },
  { name: 'sumMay',
    required: true,
    label: '5月',
    align: 'left',
    field: row => row.sumMay,
    format: val => `￥${val}`,
    sortable: true,
    sort: (a, b, rowA, rowB) => parseInt(a * 100, 10) - parseInt(b * 100, 10)
  },
  { name: 'sumJun',
    required: true,
    label: '6月',
    align: 'left',
    field: row => row.sumJun,
    format: val => `￥${val}`,
    sortable: true,
    sort: (a, b, rowA, rowB) => parseInt(a * 100, 10) - parseInt(b * 100, 10)
  },
  { name: 'sumJul',
    required: true,
    label: '7月',
    align: 'left',
    field: row => row.sumJul,
    format: val => `￥${val}`,
    sortable: true,
    sort: (a, b, rowA, rowB) => parseInt(a * 100, 10) - parseInt(b * 100, 10)
  },
  { name: 'sumAug',
    required: true,
    label: '8月',
    align: 'left',
    field: row => row.sumAug,
    format: val => `￥${val}`,
    sortable: true,
    sort: (a, b, rowA, rowB) => parseInt(a * 100, 10) - parseInt(b * 100, 10)
  },
  { name: 'sumSep',
    required: true,
    label: '9月',
    align: 'left',
    field: row => row.sumSep,
    format: val => `￥${val}`,
    sortable: true,
    sort: (a, b, rowA, rowB) => parseInt(a * 100, 10) - parseInt(b * 100, 10)
  },
  { name: 'sumOct',
    required: true,
    label: '10月',
    align: 'left',
    field: row => row.sumOct,
    format: val => `￥${val}`,
    sortable: true,
    sort: (a, b, rowA, rowB) => parseInt(a * 100, 10) - parseInt(b * 100, 10)
  },
  { name: 'sumNov',
    required: true,
    label: '11月',
    align: 'left',
    field: row => row.sumNov,
    format: val => `￥${val}`,
    sortable: true,
    sort: (a, b, rowA, rowB) => parseInt(a * 100, 10) - parseInt(b * 100, 10)
  },
  { name: 'sumDec',
    required: true,
    label: '12月',
    align: 'left',
    field: row => row.sumDec,
    format: val => `￥${val}`,
    sortable: true,
    sort: (a, b, rowA, rowB) => parseInt(a * 100, 10) - parseInt(b * 100, 10)
  },
  { name: 'sumYear',
    required: true,
    label: '全年',
    align: 'left',
    field: row => row.sumYear,
    format: val => `￥${val}`,
    sortable: true,
    sort: (a, b, rowA, rowB) => parseInt(a * 100, 10) - parseInt(b * 100, 10)
  }
]
// 'number_of_month','amount','create_time','student'
