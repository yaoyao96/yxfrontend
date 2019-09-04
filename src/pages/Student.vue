<template>
<div>
  <q-btn class="q-my-md" @click="addStudentInfo=true" style="position:relative; left:60vw"> 增加学生 </q-btn>
  <q-dialog v-model="addStudentInfo"><student-info-form @success="closeDialog"
                                                           :create-student="createStudent"></student-info-form></q-dialog>
  <paid-form></paid-form>
</div>
</template>

<script>
import api from 'src/api/api'
import studentInfoForm from 'src/components/studentInfoForm'
import paidForm from 'src/pages/paidForm'
export default {
  name: 'student',
  components: {
    studentInfoForm,
    paidForm
  },
  data () {
    return {
      students: null,
      addStudentInfo: false,
      createStudent: true
    }
  },
  methods: {
    closeDialog () {
      // let NewPage = '_empty' + '?time=' + new Date().getTime() / 500
      // this.$router.push(NewPage)
      this.$router.go(0)
    }
  },
  async created () {
    this.students = await api.getAllStudents()
  }
}
</script>

<style scoped>

</style>
