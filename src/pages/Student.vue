<template>
<div> <q-card v-for="student in students" :key="student.id"
               clickable
               style="max-width: 80vw"
               class="q-pa-sm q-ma-lg">
  <q-item clickable :to="{name: 'studentdetail', params: { id: student.id }}">
    <q-item-section avatar>
      <q-avatar style="background-color: powderblue">
        {{student.id}}
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{student.name}}</q-item-label>
      <q-item-label caption>学生</q-item-label>
    </q-item-section>
  </q-item>
</q-card></div>
</template>

<script>
import api from 'src/api/api'
export default {
  name: 'student',
  data () {
    return {
      students: null
    }
  },
  async created () {
    this.students = await api.getAllStudents()
  }
}
</script>

<style scoped>

</style>
