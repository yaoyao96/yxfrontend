<template>
  <div class="q-ma-lg" v-if="isReady">
    <display-table :columns="paidPeriodColumn" :data="paidPeriodList"
                   paid-form title="学生缴费" :row-click="toStudent"></display-table></div>
</template>

<script>
import api from 'src/api/api'
import paidPeriod from 'src/pages/column/paidPeriod'
import displayTable from 'src/components/displayTable'
export default {
  name: 'paidform',
  components: {
    displayTable
  },
  data () {
    return {
      paidPeriodList: [],
      paidPeriodColumn: paidPeriod,
      isReady: false
    }
  },
  methods: {
    toStudent (row) {
      this.$router.push({ name: 'studentdetail', params: { id: row.id } })
    }
  },
  async created () {
    this.paidPeriodList = await api.getAllPaidPeriod()
    this.isReady = true
  }
}
</script>

<style scoped>

</style>
