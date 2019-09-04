<template>
  <q-card>
    <div class="q-pa-md" style="max-width: 500px">
      <q-form
        class="q-gutter-md"
      >
        <present-field v-if="!createSalary" label="老师" icon="face" :text="teacherName"></present-field>
        <q-input
          filled
          ref="year"
          v-model="year"
          label="年份"
          type="number"
          :disable="!createSalary"
          suffix="年"
          :rules="[
          val => !!val || '*必填',
          val => 2000 < val && val <2050 || '请填写正确的数字',
        ]"
          lazy-rules
        />
        <q-input
        filled
        v-model="month"
        ref="month"
        label="月份"
        :disable="!createSalary"
        suffix="月"
        :rules="[
          val => !!val || '*必填',
          val => val < 13 && val > 0 || '请填写正确的数字',
        ]"
        lazy-rules
      />
        <q-input
          filled
          v-model="amount"
          ref="amount"
          label="金额"
          type="number"
          prefix="￥"
          :rules="[
          val => !!val || '*必填',
          val => val < 99999.99 && val > 0 || '请填写正确的数字',
        ]"
          lazy-rules
        />
        <q-input
          filled
          v-model="remarks"
          label="备注"
          autogrow
          placeholder="可不填写"
        />
      </q-form>
      <br>
      <div>
        <q-btn label="提交" type="submit" color="primary" @click="onSubmit"/>
        <q-btn v-if="createSalary" label="重置" type="reset" color="primary" flat class="q-ml-sm" @click="onReset"/>
      </div>
    </div></q-card>
</template>

<script>
import presentField from 'src/components/presentField'
import api from 'src/api/api'
export default {
  name: 'teacherSalaryForm',
  components: {
    presentField
  },
  data () {
    return {
      year: null,
      month: null,
      amount: null,
      remarks: null
    }
  },
  props: {
    teacher: String,
    teacherName: String,
    salary: null,
    createSalary: Boolean
  },
  methods: {
    onReset () {
      this.year = null
      this.month = null
      this.amount = null
      this.remarks = null
    },
    async onSubmit () {
      this.$refs.year.validate()
      this.$refs.month.validate()
      this.$refs.amount.validate()

      if (this.$refs.month.hasError || this.$refs.amount.hasError || this.$refs.year.hasError) {
        // this.formHasError = true
      } else {
        let param = new FormData() // 创建form对象
        param.append('year', this.year) // 通过append向form对象添加数据
        param.append('month', this.month) // 通过append向form对象添加数据
        param.append('amount', this.amount) // 添加form表单中其他数据
        param.append('teacher', this.salary.teacher) // 添加form表单中其他数据
        if (this.remarks) {
          param.append('remarks', this.remarks)
        }
        if (this.createSalary) {
          await api.createTeacherSalary(param)
        } else {
          await api.updateTeacherSalary(this.salary.id, param)
        }
        this.$emit('success')
      }
    }
  },
  created () {
    this.year = this.salary.year
    this.month = this.salary.month
    this.amount = this.salary.amount
    this.remarks = this.salary.remarks
  }

}
</script>

<style scoped>

</style>
