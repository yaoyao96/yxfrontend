import axios from 'axios'

export default {
  // entityIdTakenChecker: async (country, idType, id) => {
  //   let res = await axios.get(`/api/suppliers/entityidcheck?country=${country}&entityIdType=${idType}&entityId=${id}`)
  //   return res.data
  // },
  // createSupplier: async (formData) => {
  //   let res = await axios.post('/api/suppliers', formData)
  //   return res.data
  // },
  // updateSupplier: async (formData) => {
  //   let res = await axios.put('/api/suppliers', formData)
  //   return res.data
  // },
  getAllPaidSum: async () => {
    let res = await axios.get(`http://localhost:8000/paidSum/`)
    console.log('paidPeriodList>>', res)
    return res.data
  },
  getAllTrainingSum: async () => {
    let res = await axios.get(`http://localhost:8000/trainingSum/`)
    console.log('paidPeriodList>>', res)
    return res.data
  },
  getAllPaidPeriod: async () => {
    let res = await axios.get(`http://localhost:8000/paidperiod/`)
    console.log('paidPeriodList>>', res)
    return res.data
  },
  getAllIncome: async () => {
    let res = await axios.get(`http://localhost:8000/income/?format=json`)
    console.log('IncomeList>>', res)
    return res.data.results
  },
  getAllTeachers: async () => {
    let res = await axios.get(`http://localhost:8000/teachers/?format=json`)
    console.log('TeacherList>>', res)
    return res.data.results
  },
  getTeacherById: async (Id) => {
    let res = await axios.get(`http://localhost:8000/teachers/${Id}/?format=json`)
    console.log('Teacher>>', res.data)
    return res.data
  },
  getAllStudents: async () => {
    let res = await axios.get(`http://localhost:8000/students/?format=json`)
    console.log('studentList>>', res)
    return res.data.results
  },
  getStudentById: async (Id) => {
    let res = await axios.get(`http://localhost:8000/students/${Id}/?format=json`)
    console.log('student>>', res.data)
    return res.data
  },
  getAllPaid: async () => {
    let res = await axios.get(`http://localhost:8000/paidlist/`)
    console.log('paidList>>', res.data)
    return res.data
  },
  getAllTraining: async (Id) => {
    let res = await axios.get(`http://localhost:8000/traininglist/`)
    console.log('trainingList>>', res.data)
    return res.data
  },
  getPaidGroupByStudent: async () => {
    let res = await axios.get(`http://localhost:8000/paidGroupByStudent/`)
    console.log('paidGroupByStudent>>', res.data)
    return res.data
  },
  getTrainingGroupByStudent: async () => {
    let res = await axios.get(`http://localhost:8000/trainingGroupByStudent/`)
    console.log('trainingGroupByStudent>>', res.data)
    return res.data
  },
  getPaidByStudentId: async (Id) => {
    let res = await axios.get(`http://localhost:8000/paid/${Id}/`)
    console.log('paidList>>', res.data)
    return res.data
  },
  getTrainingByStudentId: async (Id) => {
    let res = await axios.get(`http://localhost:8000/traininglist/${Id}/`)
    console.log('trainingList>>', res.data)
    return res.data
  },
  getSalaryByTeacherId: async (Id) => {
    let res = await axios.get(`http://localhost:8000/salary/${Id}/`)
    console.log('trainingList>>', res.data)
    return res.data
  },
  getTeacherByStudentId: async (Id, api) => {
    let student = await api.getStudentById(Id)
    let res = await axios.get(student.teacher)
    console.log('teacher>>', res.data)
    return res.data
  },
  createStudentPaid: async (formData) => {
    let res = await axios.post('http://localhost:8000/studentpaid/', formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    return res.data
  },
  updateStudentPaid: async (Id, formData) => {
    let res = await axios.put(`http://localhost:8000/studentpaid/${Id}/`, formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    return res.data
  },
  createStudentTraining: async (formData) => {
    let res = await axios.post('http://localhost:8000/training/', formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    return res.data
  },
  updateStudentTraining: async (Id, formData) => {
    let res = await axios.put(`http://localhost:8000/training/${Id}/`, formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    return res.data
  },
  createStudent: async (formData) => {
    let res = await axios.post('http://localhost:8000/students/', formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    return res.data
  },
  updateStudent: async (Id, formData) => {
    let res = await axios.put(`http://localhost:8000/students/${Id}/`, formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    return res.data
  },
  createTeacher: async (formData) => {
    let res = await axios.post('http://localhost:8000/teachers/', formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    return res.data
  },
  updateTeacher: async (Id, formData) => {
    let res = await axios.put(`http://localhost:8000/teachers/${Id}/`, formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    return res.data
  },
  deleteTeacherOfStudent: async (Id) => {
    let res = await axios.get(`http://localhost:8000/deleteteacher/${Id}`)
    console.log('studentList>>', res.data)
    return res.data
  },
  createTeacherSalary: async (formData) => {
    let res = await axios.post('http://localhost:8000/teachersalary/', formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    return res.data
  },
  updateTeacherSalary: async (Id, formData) => {
    let res = await axios.put(`http://localhost:8000/teachersalary/${Id}/`, formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    return res.data
  },
  createIncome: async (formData) => {
    let res = await axios.post('http://localhost:8000/income/', formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    return res.data
  },
  updateIncome: async (Id, formData) => {
    let res = await axios.put(`http://localhost:8000/income/${Id}/`, formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    return res.data
  }
}
