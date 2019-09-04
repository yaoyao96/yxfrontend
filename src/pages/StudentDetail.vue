<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div><div class="q-pa-md q-ma-md"
         v-if="isReady">
      <div class="q-ma-lg row">
        <field label="姓名" icon="face" :text="student.name" class="col-6"></field>
        <field label="级别" icon="fas fa-layer-group" :text="student.level" class="col-6"></field>
        <field label="出生日期" icon="cake" :text="student.date_of_birth" class="col-6"></field>
        <field label="老师" icon="fas fa-chalkboard-teacher" :text="student.teacher.name" class="col-6"></field>
        <field label="备注" icon="note" :text="student.remarks"></field>
        </div><q-btn @click="updateStudentInfo=true" style="position:relative; left:60vw">更新</q-btn>
      <q-btn @click="deleteStudent=true" style="position:relative; left:61vw">删除</q-btn>
      <div class="q-ma-sm q-gutter-sm row" >
        <display-table title="课程缴费"
                       :data="paidList"
                       :key="addPaidKey"
                       :row-click="editPaid"
                       :columns="pcolumns" class="col-6" :create="addPaidFunction"></display-table>
        <display-table title="练琴缴费"
                       :data="trainingList"
                       :row-click="editTraining"
                       :columns="tcolumns" class="col-5" :create="addTrainingFunction"></display-table>
      </div>
      <q-dialog v-model="deleteStudent" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar icon="warning" color="red" text-color="white" />
            <span class="q-ml-sm">你确定要删除这名学生吗？</span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="取消" color="primary" @click="deleteStudent=false"/>
            <q-btn flat label="确认" color="primary" @click="deleteStudentInfo"/>
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="updateStudentInfo"><student-info-form @success="closePaidDialog" :student="student"
                                                             :create-student="createStudent"></student-info-form></q-dialog>
      <q-dialog v-model="addPaid"><student-paid-form @success="closePaidDialog" :student-name="student.name" :student-paid="studentPaid"
       :create-paid="createPaid"></student-paid-form></q-dialog>
      <q-dialog v-model="addTraining"><student-training-form @success="closePaidDialog" :student-name="student.name" :student-training="studentTraining"
                                                             :create-training="createTraining"></student-training-form></q-dialog>
    </div><loading v-else></loading></div>
</template>

<script>
import api from 'src/api/api'
import field from 'src/components/presentField'
import displayTable from 'src/components/displayTable'
import studentPaidForm from 'src/components/studentPaidForm'
import studentTrainingForm from 'src/components/studentTrainingForm'
import studentInfoForm from 'src/components/studentInfoForm'
import pcolumns from './column/studentPaid'
import tcolumns from './column/training'
import loading from 'src/components/loading'
export default {
  name: 'StudentDetail',
  components: {
    field,
    displayTable,
    studentPaidForm,
    studentTrainingForm,
    studentInfoForm,
    loading
  },
  data () {
    return {
      filter: '',
      addPaid: false,
      addPaidKey: 0,
      addTraining: false,
      addTrainingKey: 0,
      createPaid: false,
      createTraining: false,
      createStudent: false,
      updateStudentInfo: false,
      deleteStudent: false,
      isReady: false,
      studentId: this.$route.params.id,
      student: null,
      paidList: [],
      trainingList: [],
      api: api,
      studentPaid: {
        id: 0,
        number_of_course: 0,
        amount: 0,
        student: null,
        remarks: null
      },
      studentTraining: {
        id: 0,
        number_of_month: 0,
        amount: 0,
        student: null,
        remarks: null
      },
      pcolumns,
      tcolumns
    }
  },
  methods: {
    addPaidFunction () {
      this.createPaid = true
      // this.studentPaid.id = null
      // this.studentPaid.number_of_course = null
      // this.studentPaid.amount = null
      this.addPaid = true
    },
    closePaidDialog () {
      // let NewPage = '_empty' + '?time=' + new Date().getTime() / 500
      // this.$router.push(NewPage)
      this.$router.go(0)
    },
    editPaid (row) {
      this.createPaid = false
      this.studentPaid.id = row.id
      this.studentPaid.number_of_course = row.number_of_course
      this.studentPaid.amount = row.amount
      this.studentPaid.remarks = row.remarks
      this.addPaid = true
    },
    addTrainingFunction () {
      this.createTraining = true
      // this.studentTraining.id = null
      // this.studentTraining.number_of_month = null
      // this.studentTraining.amount = null
      // this.studentTraining.remarks = null
      this.addTraining = true
    },
    editTraining (row) {
      this.createTraining = false
      this.studentTraining.id = row.id
      this.studentTraining.number_of_month = row.number_of_month
      this.studentTraining.amount = row.amount
      this.studentTraining.remarks = row.remarks
      this.addTraining = true
    },
    async deleteStudentInfo () {
      let param = new FormData() // 创建form对象
      param.append('name', this.student.name) // 通过append向form对象添加数据
      // param.append('level', this.student.level)
      // param.append('date_of_birth', this.student.date_of_birth)
      // param.append('teacher', this.student.teacher.url.slice(0, this.student.teacher.url.indexOf('?')))
      param.append('expired', true)
      await api.updateStudent(this.student.id, param)
      this.deleteStudent = true
      this.$router.push({ name: 'student' })
    }
  },

  async created () {
    this.student = await api.getStudentById(this.studentId)
    this.studentPaid.student = this.student.url.slice(0, this.student.url.indexOf('?'))
    this.studentTraining.student = this.student.url.slice(0, this.student.url.indexOf('?'))
    this.student.teacher = await api.getTeacherByStudentId(this.studentId, this.api)// 因为method需要使用api
    this.paidList = await api.getPaidByStudentId(this.studentId)
    this.trainingList = await api.getTrainingByStudentId(this.studentId)
    this.isReady = true
  }
}
</script>

<style scoped>

</style>
