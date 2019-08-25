<template>
  <div class="q-ma-lg" v-if="isReady">
    <h5> {{teacher.name}} 薪水支出</h5>
    <display-table :columns="scolumns" :data="salaryList"
                   :create="addSalary" :row-click="editSalary"
    ></display-table>
    <br>
    <q-dialog v-model="addNew"><teacher-salary-form @success="closeDialog" :teacher-name="teacher.name" :salary="salary"
                                                   :create-salary="createSalary"></teacher-salary-form></q-dialog>
  </div>
</template>

<script>
import api from 'src/api/api'
import displayTable from 'src/components/displayTable'
import teacherSalaryForm from 'src/components/teacherSalaryForm'
import scolumns from './column/teacherSalary'
export default {
  name: 'teacherdetail',
  components: {
    displayTable,
    teacherSalaryForm
  },
  data () {
    return {
      teacherId: this.$route.params.id,
      teacher: null,
      salaryList: [],
      isReady: false,
      addNew: false,
      createSalary: false,
      salary: {
        year: null,
        month: null,
        amount: null,
        teacher: null
      },
      scolumns
    }
  },
  methods: {
    closeDialog () {
      // let NewPage = '_empty' + '?time=' + new Date().getTime() / 500
      // this.$router.push(NewPage)
      this.$router.go(0)
    },
    editSalary (row) {
      this.createSalary = false
      this.salary.id = row.id
      this.salary.year = row.year
      this.salary.month = row.month
      this.salary.amount = row.amount
      this.addNew = true
    },
    addSalary () {
      this.createSalary = true
      this.salary.id = null
      this.salary.year = null
      this.salary.month = null
      this.salary.amount = null
      this.addNew = true
    }
  },

  async created () {
    this.teacher = await api.getTeacherById(this.teacherId)
    this.salaryList = await api.getSalaryByTeacherId(this.teacherId)
    this.salary.teacher = this.teacher.url.slice(0, this.teacher.url.indexOf('?'))
    this.isReady = true
  }
}
</script>
