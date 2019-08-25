<template>
  <q-card>
  <div class="q-pa-md" style="max-width: 500px">
    <q-form
      class="q-gutter-md"
    >
      <present-field label="学生" icon="face" :text="studentName"></present-field>
      <q-input
        filled
        ref="numberOfCourse"
        v-model="numberOfCourse"
        label="缴费课程数"
        type="number"
        suffix="节"
        :rules="[
          val => !!val || '*必填',
          val => val.length < 11 || '请填写正确的数字',
        ]"
        lazy-rules
      />
      <q-input
        filled
        ref="amount"
        v-model="amount"
        label="缴费金额"
        type="number"
        prefix="￥"
        :rules="[
          val => !!val || '*必填',
          val => val < 99999.99 && val > 0  || '请填写正确的数字',
        ]"
        lazy-rules
      />
    </q-form>
    <br>
    <div>
      <q-btn label="提交" type="submit" color="primary" @click="onSubmit"/>
      <q-btn label="重置" type="reset" color="primary" flat class="q-ml-sm" @click="onReset"/>
    </div>
  </div></q-card>
</template>

<script>
import presentField from 'src/components/presentField'
import api from 'src/api/api'
export default {
  name: 'studentPaidForm',
  components: {
    presentField
  },
  data () {
    return {
      numberOfCourse: null,
      amount: null
    }
  },
  props: {
    student: String,
    studentName: String,
    studentPaid: null,
    createPaid: Boolean
  },
  methods: {
    onReset () {
      this.numberOfCourse = null
      this.amount = null
    },
    async onSubmit () {
      this.$refs.numberOfCourse.validate()
      this.$refs.amount.validate()

      if (this.$refs.numberOfCourse.hasError || this.$refs.amount.hasError) {
        // this.formHasError = true
      } else {
        let param = new FormData() // 创建form对象
        param.append('number_of_course', this.numberOfCourse) // 通过append向form对象添加数据
        param.append('amount', this.amount) // 添加form表单中其他数据
        param.append('student', this.studentPaid.student) // 添加form表单中其他数据
        if (this.createPaid) {
          await api.createStudentPaid(param)
        } else {
          await api.updateStudentPaid(this.studentPaid.id, param)
        }
        this.$emit('success')
      }
    }
  },
  created () {
    if (!this.createPaid) {
      this.numberOfCourse = this.studentPaid.number_of_course
      this.amount = this.studentPaid.amount
    }
  }

}
</script>

<style scoped>

</style>
