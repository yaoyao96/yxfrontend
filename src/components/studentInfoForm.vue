<template>
  <q-card>
    <div class="q-pa-md" style="max-width: 500px">
      <q-form
        v-if="isReady"
        class="q-gutter-md"
      >
        {{student}}
        <present-field v-if="!createStudent" label="学生号" icon="face" :text="student.id"></present-field>
        <q-input
          filled
          v-model="name"
          label="姓名"
        />
        <q-input
          filled
          v-model="level"
          label="级别"
          type="number"
        />
        <q-input
          filled
          v-model="dateOfBirth"
          label="出生日期"
          type="date"
        />
        <q-select v-model="teacher" :options="options"
                  option-value="url"
                  option-label="name"
                  emit-value
                  map-options
                  filled
                  label="老师" />

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
  name: 'studentInfoForm',
  components: {
    presentField
  },
  data () {
    return {
      name: null,
      level: null,
      dateOfBirth: null,
      teacher: null,
      options: [],
      isReady: false
    }
  },
  props: {
    student: Object,
    createStudent: Boolean
  },
  methods: {
    onReset () {
      this.name = null
      this.level = null
      this.dateOfBirth = null
      this.teacher = null
    },
    async onSubmit () {
      let param = new FormData() // 创建form对象
      param.append('name', this.name) // 通过append向form对象添加数据
      param.append('level', this.level) // 添加form表单中其他数据
      param.append('date_of_birth', this.dateOfBirth) // 添加form表单中其他数据
      param.append('teacher', this.teacher.slice(0, this.teacher.indexOf('?'))) // 添加form表单中其他数据
      if (this.createStudent) {
        await api.createStudent(param)
      } else {
        await api.updateStudent(this.student.id, param)
      }
      this.$emit('success')
    }
  },
  async created () {
    this.options = await api.getAllTeachers()
    if (!this.createStudent) {
      this.name = this.student.name
      this.level = this.student.level
      this.dateOfBirth = this.student.date_of_birth
      this.teacher = this.student.teacher.url
    }
    this.isReady = true
  }

}
</script>

<style scoped>

</style>
