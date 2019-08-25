<template>
  <div>
    <!--{{teachers}}-->
    <q-btn class="q-my-md" @click="addTeacherInfo=true" style="position:relative; left:60vw"> 添加老师 </q-btn>
    <q-dialog v-model="addTeacherInfo"><teacher-info-form @success="closeDialog"></teacher-info-form></q-dialog>
    <q-card v-for="teacher in teachers" :key="teacher.id"
            clickable
            style="max-width: 80vw"
            class="q-pa-sm q-ma-lg">
      <q-item clickable :to="{name: 'teacherdetail', params: { id: teacher.id }}">
        <q-item-section avatar>
          <q-avatar style="background-color: powderblue">
            {{teacher.id}}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{teacher.name}}</q-item-label>
          <q-item-label caption>老师</q-item-label>
        </q-item-section>
      </q-item>
    </q-card>
  </div>
</template>

<script>
import api from 'src/api/api'
import teacherInfoForm from 'src/components/teacherInfoForm'
export default {
  name: 'Teacher',
  components: {
    teacherInfoForm
  },
  data () {
    return {
      teachers: null,
      addTeacherInfo: false
    }
  },
  methods: {
    closeDialog () {
      // let NewPage = '_empty' + '?time=' + new Date().getTime() / 500
      // this.$router.push(NewPage)
      this.$router.go(0)
    }
  },
  async created () {
    this.teachers = await api.getAllTeachers()
  }
}
</script>
<!--<style lang="stylus" scoped>-->
  <!--.my-card-->
    <!--width 100%-->
    <!--max-width 250px-->
<!--</style>-->
<style scoped>

</style>
