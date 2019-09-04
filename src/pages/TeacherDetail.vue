<template>
  <div><div class="q-ma-lg" v-if="isReady">
    <div class="q-ma-md row" >
    <p class="text-h5"> {{teacher.name}} 薪水支出</p>
    <q-btn @click="deleteTeacher=true" style="position:relative; left:50vw">删除 <q-tooltip content-style="font-size: 10px">
      点击删除教师
    </q-tooltip></q-btn>
    </div>
    <display-table :columns="scolumns" :data="salaryList"
                   :create="addSalary" :row-click="editSalary"
    ></display-table>
    <br>
    <q-dialog v-model="deleteTeacher" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="red" text-color="white" />
          <span class="q-ml-sm">你确定要删除这名老师吗？</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="取消" color="primary" @click="deleteTeacher=false"/>
          <q-btn flat label="确认" color="primary" @click="deleteTeacherInfo"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="addNew"><teacher-salary-form @success="closeDialog" :teacher-name="teacher.name" :salary="salary"
                                                   :create-salary="createSalary"></teacher-salary-form></q-dialog>
  </div>
    <loading v-else></loading>
  </div>
</template>

<script>
import api from 'src/api/api'
import displayTable from 'src/components/displayTable'
import teacherSalaryForm from 'src/components/teacherSalaryForm'
import scolumns from './column/teacherSalary'
import loading from 'src/components/loading'
export default {
  name: 'teacherdetail',
  components: {
    displayTable,
    loading,
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
      deleteTeacher: false,
      salary: {
        year: null,
        month: null,
        amount: null,
        teacher: null,
        remarks: null
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
      this.salary.remarks = row.remarks
      this.addNew = true
    },
    addSalary () {
      this.createSalary = true
      this.salary.id = null
      this.salary.year = null
      this.salary.month = null
      this.salary.amount = null
      this.salary.remarks = null
      this.addNew = true
    },
    async deleteTeacherInfo () {
      let param = new FormData() // 创建form对象
      param.append('name', this.teacher.name) // 通过append向form对象添加数据
      // param.append('level', this.student.level)
      // param.append('date_of_birth', this.student.date_of_birth)
      // param.append('teacher', this.student.teacher.url.slice(0, this.student.teacher.url.indexOf('?')))
      param.append('expired', true)
      await api.deleteTeacherOfStudent(this.teacher.id)
      await api.updateTeacher(this.teacher.id, param)
      this.deleteTeacher = true
      this.$router.push({ name: 'teacher' })
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
