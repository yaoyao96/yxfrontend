<template>
  <q-card>
    <div class="q-pa-md" style="max-width: 500px">
      <q-form
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="name"
          label="姓名"
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
import api from 'src/api/api'
export default {
  name: 'teacherInfoForm',
  data () {
    return {
      name: null
    }
  },
  methods: {
    onReset () {
      this.name = null
    },
    async onSubmit () {
      let param = new FormData() // 创建form对象
      param.append('name', this.name) // 通过append向form对象添加数据
      await api.createTeacher(param)
      this.$emit('success')
    }
  }

}
</script>

<style scoped>

</style>
