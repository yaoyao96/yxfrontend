<template>
  <div>{{content}}</div>
</template>

<script>
import api from 'src/api/api'

export default {
  name: 'Teacher',
  data () {
    return {
      content: api.getTeacherById(1)
    }
  }
}
</script>

<style scoped>

</style>
