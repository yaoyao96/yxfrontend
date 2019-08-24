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
  getPaidByStudentId: async (Id) => {
    let res = await axios.get(`http://localhost:8000/paid/${Id}/`)
    console.log('paidList>>', res.data)
    return res.data
  },
  getTrainingByStudentId: async (Id) => {
    let res = await axios.get(`http://localhost:8000/training/${Id}/`)
    console.log('trainingList>>', res.data)
    return res.data
  },
  getTeacherByStudentId: async (Id, api) => {
    let student = await api.getStudentById(Id)
    let res = await axios.get(student.teacher)
    console.log('teacher>>', res.data)
    return res.data
  }

}
