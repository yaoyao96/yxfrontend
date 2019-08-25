<template>
  <q-card>
    <div class="q-pa-md" style="max-width: 500px">
      <q-form
        class="q-gutter-md"
      >
        {{teacher}}
        <present-field v-if="!createSalary" label="老师" icon="face" :text="teacherName"></present-field>
        <q-input
          filled
          v-model="year"
          label="年份"
          type="number"
          :disable="!createSalary"
        />
        <q-input
        filled
        v-model="month"
        label="月份"
        :disable="!createSalary"
      />
        <q-input
          filled
          v-model="amount"
          label="金额"
          type="number"
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
  name: 'teacherSalaryForm',
  components: {
    presentField
  },
  data () {
    return {
      year: null,
      month: null,
      amount: null
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
    },
    async onSubmit () {
      let param = new FormData() // 创建form对象
      param.append('year', this.year) // 通过append向form对象添加数据
      param.append('month', this.month) // 通过append向form对象添加数据
      param.append('amount', this.amount) // 添加form表单中其他数据
      param.append('teacher', this.salary.teacher) // 添加form表单中其他数据
      if (this.createSalary) {
        await api.createTeacherSalary(param)
      } else {
        await api.updateTeacherSalary(this.salary.id, param)
      }
      this.$emit('success')
    }
  },
  created () {
    if (!this.createSalary) {
      this.year = this.salary.year
      this.month = this.salary.month
      this.amount = this.salary.amount
    }
  }

}
</script>

<style scoped>

</style>
