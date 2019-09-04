<template>
  <q-card>
    <div class="q-pa-md" style="max-width: 500px">
      <q-form
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="incomeType"
          label="开支类型"
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
          val => val < 999999.99 && val > 0 || '请填写正确的数字',
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
        <q-btn label="重置" type="reset" color="primary" flat class="q-ml-sm" @click="onReset"/>
      </div>
    </div></q-card>
</template>

<script>
// import presentField from 'src/components/presentField'
import api from 'src/api/api'
export default {
  name: 'incomeForm',
  components: {
    // presentField
  },
  data () {
    return {
      incomeType: null,
      amount: null,
      remarks: null
    }
  },
  props: {
    income: null,
    createIncome: Boolean
  },
  methods: {
    onReset () {
      this.incomeType = null
      this.amount = null
    },
    async onSubmit () {
      this.$refs.amount.validate()

      if (this.$refs.amount.hasError) {
        // this.formHasError = true
      } else {
        let param = new FormData() // 创建form对象
        param.append('income_type', this.incomeType) // 通过append向form对象添加数据
        param.append('amount', this.amount) // 添加form表单中其他数据
        if (this.remarks) {
          param.append('remarks', this.remarks)
        }
        if (this.createIncome) {
          await api.createIncome(param)
        } else {
          await api.updateIncome(this.income.id, param)
        }
        this.$emit('success')
      }
    }
  },
  created () {
    if (!this.createIncome) {
      this.incomeType = this.income.income_type
      this.amount = this.income.amount
      this.remarks = this.income.remarks
    }
  }

}
</script>

<style scoped>

</style>
