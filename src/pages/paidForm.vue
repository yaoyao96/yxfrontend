<template>
  <div><div class="q-ma-lg" v-if="isReady">
    <display-table :columns="paidPeriodColumn" :data="paidPeriodList"
                   paid-form title="学生概况" :row-click="toStudent"></display-table></div><loading v-else></loading></div>
</template>

<script>
import api from 'src/api/api'
import paidPeriod from 'src/pages/column/paidPeriod'
import displayTable from 'src/components/displayTable'
import loading from 'src/components/loading'
export default {
  name: 'paidform',
  components: {
    displayTable,
    loading
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
