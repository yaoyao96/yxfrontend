<template>
<div>
  <q-btn class="q-my-md" @click="addStudentInfo=true" style="position:relative; left:60vw"> 增加学生 </q-btn>
  <q-dialog v-model="addStudentInfo"><student-info-form @success="closeDialog"
                                                           :create-student="createStudent"></student-info-form></q-dialog>
  <q-card v-for="student in students" :key="student.id"
               clickable
               style="max-width: 80vw"
               class="q-pa-sm q-ma-lg">
  <q-item clickable :to="{name: 'studentdetail', params: { id: student.id }}">
    <q-item-section avatar>
      <q-avatar style="background-color: powderblue">
        {{student.id}}
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{student.name}}</q-item-label>
      <q-item-label caption>学生</q-item-label>
    </q-item-section>
  </q-item>
</q-card></div>
</template>

<script>
import api from 'src/api/api'
import studentInfoForm from 'src/components/studentInfoForm'
export default {
  name: 'student',
  components: {
    studentInfoForm
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
