<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="q-pa-md q-ma-md"
         v-if="isReady">
      <div class="q-ma-lg row">
        <field label="姓名" icon="face" :text="student.name" class="col-6"></field>
        <field label="级别" icon="fas fa-layer-group" :text="student.level" class="col-6"></field>
        <field label="年龄" icon="cake" :text="student.date_of_birth" class="col-6"></field>
        <field label="老师" icon="fas fa-chalkboard-teacher" :text="student.teacher.name" class="col-6"></field>
       </div>
      <div class="q-ma-sm q-gutter-sm row">
      <q-table
        title="课程缴费"
        :data="paidList"
        :columns="pcolumns"
        row-key="id"
        class="col-6"
        :filter="filter"
      ><template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <br>
      </template>
        <template v-slot:top-left>
        <q-btn color="primary" text-color="white" rounded label="+" />&nbsp; <strong>课程缴费</strong>
</template>
      </q-table>
      <q-table
        v-if="isReady"
        title="课程缴费"
        :data="trainingList"
        :columns="tcolumns"
        row-key="id"
        class="col-5"
      /></div>
    </div>
</template>

<script>
import api from 'src/api/api'
import field from 'src/components/presentField'
import pcolumns from './column/studentPaid'
import tcolumns from './column/training'
export default {
  name: 'StudentDetail',
  components: {
    field
  },
  data () {
    return {
      filter: '',
      isReady: false,
      studentId: this.$route.params.id,
      student: null,
      paidList: [],
      trainingList: [],
      api: api,
      pcolumns,
      tcolumns
    }
  },
  async created () {
    this.student = await api.getStudentById(this.studentId)
    this.student.teacher = await api.getTeacherByStudentId(this.studentId, this.api)
    this.paidList = await api.getPaidByStudentId(this.studentId)
    this.trainingList = await api.getTrainingByStudentId(this.studentId)
    this.isReady = true
  }
}
</script>

<style scoped>

</style>
