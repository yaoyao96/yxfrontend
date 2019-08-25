<template>
  <q-card>
    <div class="q-pa-md" style="max-width: 500px">
      <q-form
        class="q-gutter-md"
      >
        <present-field label="学生" icon="face" :text="studentName"></present-field>
        <q-input
          filled
          ref="numberOfMonth"
          v-model="numberOfMonth"
          label="缴费月数"
          type="number"
          suffix="个月"
          :rules="[
          val => !!val || '*必填',
          val => val.length < 3 || '请填写正确的数字',
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
  name: 'studentTrainingForm',
  components: {
    presentField
  },
  data () {
    return {
      numberOfMonth: null,
      amount: null
    }
  },
  props: {
    student: String,
    studentName: String,
    studentTraining: null,
    createTraining: Boolean
  },
  methods: {
    onReset () {
      this.numberOfMonth = null
      this.amount = null
    },
    async onSubmit () {
      this.$refs.numberOfMonth.validate()
      this.$refs.amount.validate()

      if (this.$refs.numberOfMonth.hasError || this.$refs.amount.hasError) {
        // this.formHasError = true
      } else {
        let param = new FormData() // 创建form对象
        param.append('number_of_month', this.numberOfMonth) // 通过append向form对象添加数据
        param.append('amount', this.amount) // 添加form表单中其他数据
        param.append('student', this.studentTraining.student) // 添加form表单中其他数据
        if (this.createTraining) {
          await api.createStudentTraining(param)
        } else {
          await api.updateStudentTraining(this.studentTraining.id, param)
        }
        this.$emit('success')
      }
    }
  },
  created () {
    if (!this.createTraining) {
      this.numberOfMonth = this.studentTraining.number_of_month
      this.amount = this.studentTraining.amount
    }
  }

}
</script>

<style scoped>

</style>
