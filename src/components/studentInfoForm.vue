<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-card>
    <div class="q-pa-md" style="max-width: 500px">
      <q-form
        v-if="isReady"
        class="q-gutter-md"
      >
        <present-field v-if="!createStudent" label="学生号" icon="face" :text="student.id"></present-field>
        <q-input
          filled
          ref="name"
          v-model="name"
          label="姓名"
          :rules="[
          val => !!val || '*必填'
        ]"
        />
        <q-input
          filled
          ref="level"
          v-model="level"
          label="级别"
          type="number"
          suffix="级"
          :rules="[
          val => !!val || '*必填',
          val => val < 12 && val >= 0 || '请填写正确的数字',
        ]"
          lazy-rules
        />
        {{dateOfBirth}}
        <q-input
          filled
          v-model="dateOfBirth"
          ref="dateOfBirth"
          bottom-slots
          label="出生日期"
          type="date"
          :rules="[
          val => !val || /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/.test(val) || '请输入正确的日期' ,
        ]"
        ><template v-slot:hint>
          请点击右边角标选择日期
        </template></q-input>
        <q-select v-model="teacher" :options="options"
                  option-value="url"
                  option-label="name"
                  emit-value
                  map-options
                  filled
                  ref="teacher"
                  :rules="[
          val => !!val || '*必填'
        ]"
                  label="老师" />
        <q-input
          filled
          v-model="remarks"
          label="备注"
          autogrow
          placeholder="可不填写"
        />

      </q-form>
      <loading v-else></loading>
      <br>
      <div>
        <q-btn label="提交" color="primary" @click="onSubmit"/>
        <q-btn label="重置" color="primary" flat class="q-ml-sm" @click="onReset"/>
      </div>
    </div></q-card>
</template>

<script>
import presentField from 'src/components/presentField'
import api from 'src/api/api'
import loading from 'src/components/loading'
export default {
  name: 'studentInfoForm',
  components: {
    presentField,
    loading
  },
  data () {
    return {
      name: null,
      level: null,
      dateOfBirth: null,
      teacher: null,
      remarks: null,
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
      this.remarks = null
    },
    async onSubmit () {
      this.$refs.level.validate()
      this.$refs.name.validate()
      this.$refs.teacher.validate()
      this.$refs.dateOfBirth.validate()

      if (this.$refs.level.hasError || this.$refs.name.hasError || this.$refs.teacher.hasError || this.$refs.dateOfBirth.hasError) {
        // this.formHasError = true
      } else {
        let param = new FormData() // 创建form对象
        param.append('name', this.name) // 通过append向form对象添加数据
        param.append('level', this.level)
        if (this.dateOfBirth) { param.append('date_of_birth', this.dateOfBirth) }
        if (this.remarks) {
          param.append('remarks', this.remarks)
        }
        if (this.teacher) {
          param.append('teacher', this.teacher.slice(0, this.teacher.indexOf('?')))
        }
        if (this.createStudent) {
          await api.createStudent(param)
        } else {
          await api.updateStudent(this.student.id, param)
        }
        this.$emit('success')
      }
    }
  },
  async created () {
    this.options = await api.getAllTeachers()
    if (!this.createStudent) {
      this.name = this.student.name
      this.level = this.student.level
      this.dateOfBirth = this.student.date_of_birth
      this.teacher = this.student.teacher.url
      this.remarks = this.student.remarks
    }
    this.isReady = true
  }

}
</script>

<style scoped>

</style>
