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
  getTeacherById: async (Id) => {
    let res = await axios.get(`http://localhost:8000/teachers/${Id}`)
    console.log('supplier res>>', res)
    return res
  }
}
