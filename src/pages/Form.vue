<template>
<div>
  <q-list bordered class="rounded-borders" v-if="isReady">
  <q-expansion-item
    expand-separator
    icon="fas fa-arrow-circle-right"
    label="学费收入统计表"
  >
    <q-card><static-table :data="dataPaid" rowKey="year" title="课程缴费" :columns="paidSum"></static-table>
      <static-table :data="dataTraining" title="练琴缴费" rowKey="year" :columns="paidSum"></static-table>
    </q-card>
  </q-expansion-item>
    <q-expansion-item
      expand-separator
      icon="fas fa-arrow-circle-right"
      label="学生年度费用统计"
    >
      <q-card><static-table :data="dataPG" rowKey="id" title="课程缴费" :columns="paidGroupByStudent"></static-table>
        <static-table :data="dataTG" title="练琴缴费" rowKey="id" :columns="paidGroupByStudent"></static-table>
      </q-card>
    </q-expansion-item>
  <q-expansion-item
    expand-separator
    icon="fas fa-arrow-circle-right"
    label="学费详情"
  >
    <q-card><static-table :data="dataPaidDetail" title="课程缴费" rowKey="id" :columns="paidList"></static-table>
      <static-table :data="dataTrainingDetail" title="练琴缴费" rowKey="id" :columns="trainingList"></static-table>
    </q-card>
  </q-expansion-item>
</q-list><loading v-else></loading></div>
</template>

<script>
import staticTable from 'src/components/staticTable'
import paidSum from 'src/pages/column/paidSum'
import paidList from 'src/pages/column/paidList'
import trainingList from 'src/pages/column/trainingList'
import paidGroupByStudent from 'src/pages/column/paidGroupByStudent'
import loading from 'src/components/loading'
import api from 'src/api/api'
export default {
  name: 'Form',
  components: {
    staticTable,
    loading
  },
  data () {
    return {
      isReady: false,
      dataPaid: [],
      dataTraining: [],
      dataPaidDetail: [],
      dataTrainingDetail: [],
      paidSum: paidSum,
      paidList: paidList,
      trainingList: trainingList,
      paidGroupByStudent: paidGroupByStudent,
      dataPG: [],
      dataTG: []
    }
  },
  async created () {
    this.dataPaid = await api.getAllPaidSum()
    this.dataTraining = await api.getAllTrainingSum()
    this.dataPaidDetail = await api.getAllPaid()
    this.dataTrainingDetail = await api.getAllTraining()
    this.dataPG = await api.getPaidGroupByStudent()
    this.dataTG = await api.getTrainingGroupByStudent()
    this.isReady = true
  }
}
</script>

<style scoped>

</style>
