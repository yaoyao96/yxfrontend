<template>
  <div>
  <div class="q-ma-lg" v-if="isReady">
    <display-table :columns="incomeColumn" :data="incomeList"
                   title="收支表" :create="addIncome" :row-click="editIncome"></display-table>
    <q-dialog v-model="addNew"><income-form @success="closeDialog" :income="income"
                                                           :create-income="createIncome"></income-form></q-dialog>

  </div>
    <loading v-else></loading>
  </div>
</template>

<script>
import api from 'src/api/api'
import income from 'src/pages/column/income'
import displayTable from 'src/components/displayTable'
import incomeForm from 'src/components/incomeForm'
import loading from 'src/components/loading'
export default {
  name: 'income',
  components: {
    displayTable,
    incomeForm,
    loading
  },
  data () {
    return {
      incomeList: [],
      incomeColumn: income,
      isReady: false,
      addNew: false,
      createIncome: false,
      income: {
        id: null,
        amount: null,
        income_type: null,
        remarks: null
      }
    }
  },
  methods: {
    closeDialog () {
    // let NewPage = '_empty' + '?time=' + new Date().getTime() / 500
    // this.$router.push(NewPage)
      this.$router.go(0)
    },
    editIncome (row) {
      this.createIncome = false
      this.income.id = row.id
      this.income.income_type = row.income_type
      this.income.amount = row.amount
      this.income.remarks = row.remarks
      this.addNew = true
    },
    addIncome () {
      this.createIncome = true
      this.income.id = null
      this.income.income_type = null
      this.income.amount = null
      this.income.remarks = null
      this.addNew = true
    }
  },
  async created () {
    this.incomeList = await api.getAllIncome()
    this.isReady = true
  }
}
</script>

<style scoped>

</style>
